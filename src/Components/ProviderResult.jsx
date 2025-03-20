import React from "react";

const providers = [
  {
    id: 1,
    name: "Dr. Freddy Laine",
    specialties: ["Dermatology", "DME"],
    address: "26254 Frontage Rd, Suite 240",
    phone: "(210) 593-8141",
    rating: 5.0,
    cmsRating: 5.0,
    reviews: 3,
    isClosed: true,
    opensAt: "9 AM Mon",
  },
  {
    id: 2,
    name: "Dr. Sammy Brown",
    specialties: ["Cardiology", "Internal Medicine"],
    address: "123 Health St, Suite 101",
    phone: "(210) 123-4567",
    rating: 4.8,
    cmsRating: 4.5,
    reviews: 10,
    isClosed: false,
    opensAt: "8 AM Mon",
  },
  {
    id: 1,
    name: "Dr. Freddy Laine",
    specialties: ["Dermatology", "DME"],
    address: "26254 Frontage Rd, Suite 240",
    phone: "(210) 593-8141",
    rating: 5.0,
    cmsRating: 5.0,
    reviews: 3,
    isClosed: true,
    opensAt: "9 AM Mon",
  },
  {
    id: 2,
    name: "Dr. Sammy Brown",
    specialties: ["Cardiology", "Internal Medicine"],
    address: "123 Health St, Suite 101",
    phone: "(210) 123-4567",
    rating: 4.8,
    cmsRating: 4.5,
    reviews: 10,
    isClosed: false,
    opensAt: "8 AM Mon",
  },
];

function ProviderResult({results}) {
    console.log('result from child======',results);
    
  return (
    <>
    <div className="" >
      <div className="result-titile-wrp">
                            <h6 className="fw-semibold fs-8 text-start text-grey mb-3">SEARCH RESULTS</h6>
                            <div className="d-flex justify-content-end px-lg-3">
                                <span className="fs-8 text-sandwych-purple" data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                    <i className="bi bi-info-circle"></i>
                                </span>
                            </div>
                        </div>
                        <div className="px-lg-3 result-wrapper">
      {results.map((provider) => (
        <div
          key={provider.id}
          className="border border-start-0 border-end-0 border-bottom-0 border-result-common"
        >
          <div className="result-item small text-grey fw-500 ps-3 pb-3 mt-3 position-relative border-bottom">
            <div className="ps-3">
              <span className="logo-wrp square position-absolute start-0 top-0">
                <img
                  src="images/sandwych-verified-icon.png"
                  className="img-fluid"
                  alt="Verified"
                />
              </span>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column">
                  <h2 className="fw-bold h6 mt-1 mb-2 location-name">
                    <a href="#" className="nav-link">
                      {provider.Rndrng_Prvdr_First_Name+' '+provider.Rndrng_Prvdr_Last_Org_Name}
                    </a>
                  </h2>
                </div>
                <div className="d-flex align-items-center">
                  <div className="cstm-fav-btn-wrp position-relative ms-2">
                    <input
                      type="checkbox"
                      className="position-absolute invisible"
                      id={`favBtn${provider.id}`}
                      defaultChecked={false}
                    />
                    <label htmlFor={`favBtn${provider.id}`} className="cstm-fav-btn mb-0">
                      <span className="unchecked">♡</span>
                      <span className="checked">❤️</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                {provider.Rndrng_Prvdr_Type} <span className="dot-text mx-1">•</span>
                <img
                  src="images/counselor-icon.png"
                  className="img-fluid"
                  alt="counselor icon"
                />
              </div>
              <div className="d-flex flex-column flex-lg-row gap-lg-2">
                <div className="d-flex align-items-end">
                  <span>{4.8}</span>
                  <div
                    className="Stars mx-1"
                    style={{ "--rating": 4.8 }}
                    aria-label={`Rating of this provider is ${4.8} out of 5`}
                  ></div>
                  <span>({"review"})</span>
                  <span className="dot-text mx-1">•</span>
                </div>
                <div className="d-flex align-items-end">
                  <span>CMS {4.5}</span>
                  <div
                    className="Stars mx-1"
                    style={{ "--rating": 4.5 }}
                    aria-label={`CMS rating is ${4.5} out of 5`}
                  ></div>
                  <span>({'review'})</span>
                </div>
              </div>
              <div>
                <span>{provider.Rndrng_Prvdr_St1}</span>
                <span className="dot-text mx-1">•</span>
                <a href="#" className="sub-text text-decoration-none">
                  Directions
                </a>
              </div>
              <div>
                <span className={provider ? "status-closed" : "status-open"}>
                  {provider ? "Closed" : "Open"}
                </span>
                <span className="dot-text mx-1">•</span>
                Opens {'9am'}
              </div>
              <div>
                <a href={`tel:${'8767898767'}`} className="text-decoration-none text-grey">
                  {'9876543214'}
                </a>
                <span className="dot-text mx-1">•</span>
                <a href="#" className="sub-text text-decoration-none">
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
    
  );
}

export default ProviderResult;
