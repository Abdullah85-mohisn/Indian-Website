import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './adminupload.css';

const AdminUploadPage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isUploading, setIsUploading] = useState(false);
    const [btnText, setbtnText] = useState("Upload");

    const onSubmit = async (data) => {
        setIsUploading(true);
        setbtnText("Uploading...");
        const imageUrls = [];

        for (let i = 0; i < data.images.length; i++) {
            const formData = new FormData();
            formData.append('file', data.images[i]);
            formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

            const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            });

            const fileData = await response.json();
            imageUrls.push(fileData.secure_url);
        }

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/cases/upload`, {
                caseNumber: data.caseNumber,
                year: data.year,
                images: imageUrls
            });

            alert('Upload successful');
            reset();
        } catch (err) {
            console.error(err);
            alert('Upload failed');
        }
        finally {
            setIsUploading(false); // stop loader
            setbtnText("Upload");
        }
    };

    return (
        <div className="admin-container">
            <div className="adminupload-container">
                <h2>Upload Case Images</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Case Number*</label>
                    <input {...register('caseNumber', { required: true })} type="text" placeholder="Case Number" />

                    <label>Year*</label>
                    <select {...register('year', { required: true })}>
                        <option value="" disabled>Select year</option>
                        {Array.from({ length: 2026 - 2013 + 1 }, (_, i) => {
                            const year = 2013 + i;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>

                    <label>Upload Images*</label>
                    <input {...register('images', { required: true })} type="file" multiple accept="image/*,.pdf" />

                    <button type="submit">{btnText} {isUploading && <i className="fa-solid fa-spinner fa-spin"></i>}</button>
                    <NavLink className='view-cases' to='/view-cases'>View Cases</NavLink>
                </form>

            </div>
        </div>
    );
};

export default AdminUploadPage;
