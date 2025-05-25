import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './viewpage.css';

const ViewPage = () => {
    const [cases, setCases] = useState([]);
    const [expandedCaseId, setExpandedCaseId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCases, setFilteredCases] = useState([]);

    // Fetch all cases
    const fetchCases = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cases/all`);
            setCases(res.data);
            setFilteredCases(res.data); // Initialize filtered cases
        } catch (err) {
            console.error('Error fetching cases:', err);
        }
    };

    useEffect(() => {
        fetchCases();
    }, []);

    useEffect(() => {
        const term = searchTerm.trim().toLowerCase();
        if (term === '') {
            setFilteredCases(cases);
        } else {
            const filtered = cases.filter(c =>
                c.caseNumber.toLowerCase().includes(term)
            );
            setFilteredCases(filtered);
        }
    }, [searchTerm, cases]);


    const toggleExpand = (caseId) => {
        setExpandedCaseId(expandedCaseId === caseId ? null : caseId);
    };

    const deleteImage = async (caseId, imageUrl) => {
        if (!window.confirm('Are you sure you want to delete this image?')) return;
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/cases/delete-image`, {
                caseId,
                imageUrl
            });
            fetchCases();
        } catch (err) {
            console.error('Error deleting image:', err);
        }
    };

    const deleteCase = async (caseId) => {
        if (!window.confirm('Are you sure you want to delete the entire case and all images?')) return;
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/api/cases/delete-case/${caseId}`);
            fetchCases();
        } catch (err) {
            console.error('Error deleting case:', err);
        }
    };

    //   const handleSearch = () => {
    //     const term = searchTerm.trim().toLowerCase();
    //     if (term === '') {
    //       setFilteredCases(cases); // Reset to all
    //       return;
    //     }
    //     const filtered = cases.filter(c =>
    //       c.caseNumber.toLowerCase().includes(term)
    //     );
    //     setFilteredCases(filtered);
    //   };

    return (
        <div className="view-container">
            <h2>View All Cases</h2>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Case Number"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* <button onClick={handleSearch}>Search</button> */}
            </div>

            {filteredCases.map((c) => (

                <div key={c._id} className="case-box">
                    <div className="case-header">
                        <div>
                            <strong>Case:</strong> {c.caseNumber}
                        </div>

                        <div>
                            <strong>Year:</strong> {c.year}
                        </div>

                        <div className="case-actions">
                            <button onClick={() => toggleExpand(c._id)}>
                                {expandedCaseId === c._id ? 'Hide Images ▲' : 'Show Images ▼'}
                            </button>
                            <button className="delete-btn" onClick={() => deleteCase(c._id)}>Delete Case</button>
                        </div>
                    </div>

                    {expandedCaseId === c._id && (
                        <div className="image-grid">
                            {c.images.map((img, index) => (
                                <div key={index} className="image-item">
                                    <img src={img} alt={`Case ${c.caseNumber}`} />
                                    <button onClick={() => deleteImage(c._id, img)}>Delete Image</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ViewPage;
