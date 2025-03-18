import React from 'react'
import MapComponent from './GoogleMap'
import { useState,useRef } from 'react';

function Main() {
    const [filter,setFilter] = useState('')
    const handleFilter = ()=>{
          setFilter()
    }
  return (
    <main className="min-vh-100 position-relative">
       {/* sidebar */}
       <div className="search-sidebar rounded-4 rounded-start-0 shadow mt-0 mt-md-4">
            <div className="resource-collection-item">
                <div className="rounded-4 rounded-start-0 d-flex flex-column">
                    <div className="d-flex align-items-center justify-content-between flex-wrap bg-light-grey text-dark-grey text-uppercase rounded-start-0 rounded-top-4 small p-2">
                        <div className="title-resources">Directories Provided by CMS</div>
                        <div className="date-update">Last Updated: 3/5/24</div>
                    </div>
                    <div className="p-3 py-lg-3 py-2">
                        <div className="d-flex justify-content-between align-items-start">
                            <div className="d-flex align-items-center form-control border rounded-pill overflow-hidden w-100">
                                <button type="button" id="filterToggle" className="btn d-flex align-items-center border-0"><img
                                        src="images/settings-icon.svg" className="img-fluid" alt=""/></button>
                                <input type="text" className="border-0 w-100 form-control text-grey shadow-none"
                                    placeholder="Search by Zip Code"/>
                                <button type="button" className="btn d-flex align-items-center border-0 p-2"><img
                                        src="images/search-icon.svg" className="img-fluid" alt=""/></button>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 py-lg-3 py-2 border border-start-0 border-end-0 border-bottom-0 border-common">
                        <div className="px-lg-3 filter-wrp" id="filterWraper">
                            <div className="py-3 position-relative">
                                <button type="reset" className="btn d-flex align-items-center border-0 fs-5 position-absolute end-0 top-0">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                                <h6 className="fw-bold primary-color mb-lg-3">Sort by</h6>
                                <ul className="nav category-filter nav-pills d-flex align-items-center gap-1 flex-lg-wrap sort-by-filter mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1  rounded fw-medium" id="pills-hospitals-tab" data-bs-toggle="pill" data-bs-target="#pills-hospitals"
                                            type="button" role="tab" aria-controls="pills-hospitals" aria-selected="true">Hospitals</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-pharmacies-tab" data-bs-toggle="pill" data-bs-target="#pills-pharmacies"
                                             type="button" role="tab" aria-controls="pills-pharmacies" aria-selected="false">Pharmacies</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-providers-tab" data-bs-toggle="pill" data-bs-target="#pills-providers"
                                             type="button" role="tab" aria-controls="pills-providers" aria-selected="false">Providers</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-procedures-tab" data-bs-toggle="pill" data-bs-target="#pills-procedures"
                                            type="button" role="tab" aria-controls="pills-procedures" aria-selected="false">Procedures</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-non-medical-services-tab" data-bs-toggle="pill" data-bs-target="#pills-non-medical-services"
                                           type="button" role="tab" aria-controls="pills-non-medical-services" aria-selected="false">Non-Medical Services</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-social-care-tab" data-bs-toggle="pill" data-bs-target="#pills-social-care"
                                            type="button" role="tab" aria-controls="pills-social-care" aria-selected="false">Social Care</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-ambulatory-surgical-center-tab" data-bs-toggle="pill" data-bs-target="#pills-ambulatory-surgical-center"
                                            type="button" role="tab" aria-controls="pills-ambulatory-surgical-center" aria-selected="false">Ambulatory Surgical Center</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-hospice-tab" data-bs-toggle="pill" data-bs-target="#pills-hospice"
                                            type="button" role="tab" aria-controls="pills-hospice" aria-selected="false" disabled>Procedures</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-home-health-tab" data-bs-toggle="pill" data-bs-target="#pills-home-health"
                                            type="button" role="tab" aria-controls="pills-home-health" aria-selected="false" disabled>Home Health</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-skilled-nursing-facility-tab" data-bs-toggle="pill" data-bs-target="#pills-skilled-nursing-facility"
                                            type="button" role="tab" aria-controls="pills-skilled-nursing-facility" aria-selected="false" disabled>Skilled Nursing Facility</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-wraper">
                                <div className="tab-content" id="pills-tabContent">
                                    {/* hostpital start */}
                                    
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-hospitals" role="tabpanel" aria-labelledby="pills-hospitals-tab" tabindex="0">
                                        <form action="">
                                            <div className="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 className="fw-bold primary-color mb-0">Filter Hospitals</h6>
                                                <button type="reset" className="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between ps-lg-3 mb-3">
                                                <div className="fs-7 text-grey fw-bold">
                                                    CMS Satisfaction Scores
                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                        <i className="bi bi-info-circle"></i>
                                                    </span>
                                                </div>
                                                <div className="star-rating">
                                                    <input type="radio" id="5-stars" name="rating" value="5"/>
                                                    <label for="5-stars" className="star"><i className="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="4-stars" name="rating" value="4"/>
                                                    <label for="4-stars" className="star"><i className="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="3-stars" name="rating" value="3"/>
                                                    <label for="3-stars" className="star"><i className="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="2-stars" name="rating" value="2"/>
                                                    <label for="2-stars" className="star"><i className="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="1-star" name="rating" value="1"/>
                                                    <label for="1-star" className="star"><i className="bi bi-star-fill"></i></label>
                                                </div>
                                            </div>
                                            <div className="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterHospital">
                                                <div className="accordion-item border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-hospital" aria-expanded="false"
                                                            aria-controls="flush-collapse-hospital">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                Procedure Code / DRG
                                                                <span className="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="DRG, Diagnostic Related Group, is a classNameification system that groups patients with similar characteristics.">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-hospital" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterHospital">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget1">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            
                                                                {/* <label for="hospitalSearch"></label>  */}
                                                                <div className="input-no-data">
                                                                    <input id="hospitalSearch"
                                                                    className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="cptSearchBtn"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="cost-slider d-none">
                                                                <div className="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeDRGhospital" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGhospitalInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGhospitalInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                 <button type="button" className="btn btn-type1  px-3">View Results</button> 
                                                {/* <a type="button" className="btn btn-type1 px-3" href="sidebar-search-output-hospital.html">View Results</a> */}
                                            </div>
                                        </form>
                                    </div>
                                    {/* pharmacy start */}
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-pharmacies" role="tabpanel" aria-labelledby="pills-pharmacies-tab" tabindex="0">
                                        <form action="">
                                            <div className="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 className="fw-bold primary-color mb-0">Filter Pharmacies <span className="fs-8 text-sandwych-purple"
                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip"><i
                                                            className="bi bi-info-circle"></i></span></h6>
                                                <button type="reset" className="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-end gap-1 flex-wrap advnc-filter">
                                                <div className="custom-checkbx position-relative mb-1">
                                                    <input className="invisible position-absolute" type="radio" value=""
                                                        id="compoundingChkbx" name="pharmaciesFilter"/>
                                                    <label className="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="compoundingChkbx">
                                                        <span className="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Compounding
                                                    </label>
                                                </div>
                                                <div className="custom-checkbx position-relative mb-1">
                                                    <input className="invisible position-absolute" type="radio" value="" id="retailChkbx"
                                                        name="pharmaciesFilter"/>
                                                    <label className="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="retailChkbx">
                                                        <span className="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Retail
                                                    </label>
                                                </div>
                                                <div className="custom-checkbx position-relative mb-1">
                                                    <input className="invisible position-absolute" type="radio" value="" id="mailOrderChkbx"
                                                        name="pharmaciesFilter"/>
                                                    <label
                                                        className="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="mailOrderChkbx">
                                                        <span className="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Mail-Order
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                 <button type="button" className="btn btn-type1 px-3">View Results</button> 
                                                {/* <a type="button" className="btn btn-type1 px-3" href="sidebar-search-output-pharmacy.html">View Results</a> */}
                                            </div>
                                        </form>
                                    </div>
                                    {/* priveders start */}
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-providers" role="tabpanel" aria-labelledby="pills-providers-tab" tabindex="0">
                                        <form action="">
                                            <div className="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 className="fw-bold primary-color mb-0">Filter Providers</h6>
                                                <button type="reset" className="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div className="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterProviders">
                                                <div className="accordion-item border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-providers1" aria-expanded="false"
                                                            aria-controls="flush-collapse-providers1">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                Specialty
                                                                <span className="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers1" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget2">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 {/* <label for="tags">T </label>  */}
                                                                <div className="input-no-data">
                                                                    <input id="providerSpeciality"  className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-providers2" aria-expanded="false"
                                                            aria-controls="flush-collapse-providers2">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                CPT Code
                                                                <span className="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="CPT, or Current Procedural Terminology is a medical code set for billing purposes.">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers2" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget3">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 {/* <label for="tags2">Tags: </label>  */}
                                                                <div className="input-no-data">
                                                                    <input id="providerCPT"
                                                                    className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="providerCptBtn"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div id="providerCostContainer" className=" cost-slider d-none">
                                                                <div className="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeCPTproviders" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-providers3"
                                                            aria-expanded="false" aria-controls="flush-collapse-providers3">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                HCPCS Code
                                                                <span className="fs-8 text-sandwych-purple ms-1" data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="HCPCS (Healthcare Common Procedure Coding System) is used to classNameify medical procedures">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers3" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div className="accordion-body py-3 px-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget4">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 {/* <label for="tags2">Tags: </label>  */}
                                                                <div className="input-no-data">
                                                                    <input id="providerHcpcs"
                                                                    className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="providerHcpcsBtn"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="cost-slider d-none">
                                                                <div className="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeHCPCSproviders" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSprovidersInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSprovidersInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                 <button type="button" className="btn btn-type1 px-3">View Results</button> 
                                                {/* <a type="button" className="btn btn-type1 px-3" href="sidebar-search-output-provider.html">View Results</a> */}

                                            </div>
                                        </form>
                                    </div>
                                    {/* procedures start */}
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-procedures" role="tabpanel" aria-labelledby="pills-procedures-tab" tabindex="0">
                                        <form action="">
                                            <div className="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 className="fw-bold primary-color mb-0">Filter Procedures</h6>
                                                <button type="reset" className="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div className="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterProcedures">
                                                <div className="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-procedures1" aria-expanded="false"
                                                            aria-controls="flush-collapse-procedures1">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                DRG Code
                                                                <span className="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="DRG, Diagnostic Related Group, is a classNameification system that groups patients with similar characteristics.">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures1" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget5">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div className="input-no-data">
                                                                    <input id="drgCode" type="text" value="" className="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="drgCodeBtn" className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                            className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="cost-slider d-none">
                                                                <div className="hd-type3 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeDRGprocedures" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGproceduresInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGproceduresInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-procedures2" aria-expanded="false"
                                                            aria-controls="flush-collapse-procedures2">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                CPT Code
                                                                <span className="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="CPT, or Current Procedural Terminology is a medical code set for billing purposes.">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures2" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget6">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div className="input-no-data">
                                                                    <input id="procedureCpt"
                                                                    className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="procedureCptBtn"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="cost-slider d-none">
                                                                <div className="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeCPTprocedures" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-procedures3"
                                                            aria-expanded="false" aria-controls="flush-collapse-procedures3">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                HCPCS Code
                                                                <span className="fs-8 text-sandwych-purple ms-1" data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="HCPCS (Healthcare Common Procedure Coding System) is used to classNameify medical procedures">
                                                                    <i className="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures3" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div className="accordion-body py-3 px-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget7">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div className="input-no-data">
                                                                    <input id="procedureHcpcs"
                                                                    className="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="procedureHcpcsBtn"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div className="cost-slider d-none">
                                                                <div className="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span className="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-className="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i className="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="price-range-wrap">
                                                                    <div id="sliderCostRangeHCPCSprocedures" className="range-slider"></div>
                                                                    <div className="price-input justify-content-between">
                                                                        <div className="field border rounded-pill fs-8 ps-1">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSproceduresInputMin" className="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div className="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span className="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div className="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSproceduresInputMax" className="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                 <button type="button" className="btn btn-type1 px-3">View Results</button> 
                                                {/* <a type="button" className="btn btn-type1 px-3" href="sidebar-search-output-procedure.html">View Results</a> */}
                                            </div>
                                        </form>
                                    </div>
                                    {/* non medical services start */}
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-non-medical-services" role="tabpanel" aria-labelledby="pills-non-medical-services-tab" tabindex="0">
                                        <form action="">
                                            <div className="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 className="fw-bold primary-color mb-0">Filter Non-Medical Services</h6>
                                                <button type="reset" className="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div className="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterNonMedicalServices">
                                                <div className="accordion-item border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-Non-Medical-Services1" aria-expanded="false"
                                                            aria-controls="flush-collapse-Non-Medical-Services1">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                Category
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-Non-Medical-Services1" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterNonMedicalServices">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget8">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div className="input-no-data">
                                                                    <input id="nonMedServiceCategory" type="text" value="" className="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;{'>'}</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item border-0 content-item mb-3">
                                                    <h2 className="accordion-header">
                                                        <button className="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-Non-Medical-Services2" aria-expanded="false"
                                                            aria-controls="flush-collapse-Non-Medical-Services2">
                                                            <span className="fs-7 fw-bold mb-2">
                                                                Health Insurance
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-Non-Medical-Services2" className="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterNonMedicalServices">
                                                        <div className="accordion-body p-2">
                                                            <div className="ui-widget position-relative mb-3" id="widget9">
                                                                <div className="d-none justify-content-between align-items-center input-has-data">
                                                                    <div className="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span className="toggle-search-input">X</span>
                                                                        <span className="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" className="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span className="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div className="input-no-data">
                                                                    <input id="healthInsurance"
                                                                    className="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button"
                                                                    className="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        className="search-arrow">&nbsp;</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-3">
                                                 <button type="button" className="btn btn-type1 px-3">View Results</button> 
                                                {/* <a type="button" className="btn btn-type1 px-3" href="sidebar-search-output-non-medical.html">View Results</a> */}
                                            </div>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-social-care" role="tabpanel" aria-labelledby="pills-social-care-tab" tabindex="0">...</div>
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-ambulatory-surgical-center" role="tabpanel" aria-labelledby="pills-ambulatory-surgical-center-tab" tabindex="0">...</div>
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-hospice" role="tabpanel" aria-labelledby="pills-hospice-tab" tabindex="0">...</div>
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-home-health" role="tabpanel" aria-labelledby="pills-home-health-tab" tabindex="0">...</div>
                                    <div className="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-skilled-nursing-facility" role="tabpanel" aria-labelledby="pills-skilled-nursing-facility-tab" tabindex="0">...</div>
                                </div>
                            </div>
                        </div>
                        <div className="px-lg-3">
                            <div className="border border-start-0 border-end-0 border-bottom-0 border-common py-3">
                                <div className="pt-3">
                                    <h6 className="fw-bold primary-color mb-lg-3">Capture Results</h6>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-start pb-3 pt-1">
                                            <span className="d-flex">
                                                <img src="images/save-your-fav-icon.svg" className="img-fluid" alt=""/>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="primary-color fw-semibold">Save Your Favorites</h6>
                                                <a href="" className="link-type1 text-sandwych-purple small">Create a Login</a>
                                            </div>
                                        </div>
                                        <div className="vr mx-1"></div>
                                        <div className="d-flex align-items-start pb-3 pt-1">
                                            <span className="d-flex">
                                                <img src="images/share-your-search-icon.svg" className="img-fluid" alt=""/>
                                            </span>
                                            <div className="ms-2">
                                                <h6 className="primary-color fw-semibold">Share Your Search</h6>
                                                <a href="mailto:" className="link-type1 text-sandwych-purple small">Email Results</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap bg-tab-grey rounded-start-0 rounded-bottom-4 small p-3">
                        <div className="title-resources primary-color px-lg-3">Already have an account? <a href="" className="link-type1 text-sandwych-purple" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a></div>
                    </div>
                </div>
            </div>
        </div>
       {/* sidebar */}
        <div className="bg-white p-1 map-price-overlay position-absolute end-0 z-3 mt-md-5 me-md-5">
            <div className="row gx-1 gy-1 fs-8 text-white fw-semibold text-center">
                <div className="col-lg-12 col-6">
                    <div className="bg-map-overlay-1 p-3 px-4">
                        $17,376 - $20,031
                    </div>
                </div>
                <div className="col-lg-12 col-6">
                    <div className="bg-map-overlay-2 p-3 px-4">
                        $20,036 - $24,489
                    </div>
                </div>
                <div className="col-lg-12 col-6">
                    <div className="bg-map-overlay-3 p-3 px-4">
                        $24,490 - $27,833
                    </div>
                </div>
                <div className="col-lg-12 col-6">
                    <div className="bg-map-overlay-4 p-3 px-4">
                        $27,834 - $30,543
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="min-vh-100" id="map"></div> */}
        <MapComponent/>

    </main>
  )
}

export default Main