import React, { useState } from "react";

function Verification() {
  const [candidateId, setCandidateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState("");

  // Mock database of candidate details
  const candidates = {
    CSIC2500045: {
      name: "Lakshay Sharma",
      domain: "Digital Marketing",
      duration: "45 Days",
      certificationNo: "CSIC2500045",
      startDate: "05/June/2025",
      awardDate: "04/Aug/2025",
    },
    CSIC2500037: {
      name: "Hemant Pushpdeep Sonpakar",
      domain: "Digital Marketing",
      duration: "45 Days",
      certificationNo: "CSIC2500037",
      startDate: "03/June/2025",
      awardDate: "04/Aug/2025",
    },
    CSIC2500034: {
      name: "Aditya Kumar",
      domain: "Digital Marketing",
      duration: "45 Days",
      certificationNo: "CSIC2500034",
      startDate: "02/June/2025",
      awardDate: "04/Aug/2025",
    },
  };

  const handleVerify = () => {
    setError("");
    setCertificate(null);

    if (!candidateId.trim()) {
      setError("Please enter a Candidate ID.");
      return;
    }

    if (candidates[candidateId.trim()]) {
      setCertificate(candidates[candidateId.trim()]);
    } else {
      setError("❌ Candidate ID not found.");
    }
  };

  return (
    <div className="p-5 lg:p-20 max-w-2xl m-auto">
      <h2 className="font-bold">Certificate Verification</h2>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={candidateId}
        onChange={(e) => setCandidateId(e.target.value)}
        className="p-3 w-full mb-5 border rounded-lg"
      />
      <button
        onClick={handleVerify}
        className="p-3 w-full bg-primary text-white cursor-pointer rounded-lg"
      >
        Verify
      </button>

      {error && (
        <p className="mt-3 text-red-500 font-bold">
          {error}
        </p>
      )}

      {certificate && (
        <div className="mt-5">
          <h3 className="text-center text-3xl text-accent font-bold" style={{ textAlign: "center" }}>Certificate Result</h3>
          <table className="w-full my-5">
            <tbody>
              <tr>
                <td style={cellStyle}>
                  Student Name: {certificate.name}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <td style={cellStyle}>
                  Domain: {certificate.domain}
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  Duration: {certificate.duration}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <td style={cellStyle}>
                  Certification No: {certificate.certificationNo}
                </td>
              </tr>
              <tr>
                <td style={cellStyle}>
                  Starting Date: {certificate.startDate}
                </td>
              </tr>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <td style={cellStyle}>
                  Award Date: {certificate.awardDate}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const cellStyle = {
  padding: "12px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default Verification;
