import React from 'react'
import MapComponent from './GoogleMap'
import { useState,useRef } from 'react';

function Main() {
    const [filter,setFilter] = useState('')
    const handleFilter = ()=>{
          setFilter()
    }
  return (
    <main class="min-vh-100 position-relative">
       {/* sidebar */}
       <div class="search-sidebar rounded-4 rounded-start-0 shadow mt-4">
            <div class="resource-collection-item">
                <div class="rounded-4 rounded-start-0 d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between flex-wrap bg-light-grey text-dark-grey text-uppercase rounded-start-0 rounded-top-4 small p-2">
                        <div class="title-resources">Directories Provided by CMS</div>
                        <div class="date-update">Last Updated: 3/5/24</div>
                    </div>
                    <div class="p-3 py-lg-3 py-2">
                        <div class="d-flex justify-content-between align-items-start">
                            <div class="d-flex align-items-center form-control border rounded-pill overflow-hidden w-100">
                                <button type="button" id="filterToggle" class="btn d-flex align-items-center border-0"><img
                                        src="images/settings-icon.svg" class="img-fluid" alt=""/></button>
                                <input type="text" class="border-0 w-100 form-control text-grey shadow-none"
                                    placeholder="Search by Zip Code"/>
                                <button type="button" class="btn d-flex align-items-center border-0 p-2"><img
                                        src="images/search-icon.svg" class="img-fluid" alt=""/></button>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 py-lg-3 py-2 border border-start-0 border-end-0 border-bottom-0 border-common">
                        <div class="px-lg-3 filter-wrp" id="filterWraper">
                            <div class="py-3 position-relative">
                                <button type="reset" class="btn d-flex align-items-center border-0 fs-5 position-absolute end-0 top-0">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                                <h6 class="fw-bold primary-color mb-lg-3">Sort by</h6>
                                <ul class="nav category-filter nav-pills d-flex align-items-center gap-1 flex-lg-wrap sort-by-filter mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1  rounded fw-medium" id="pills-hospitals-tab" data-bs-toggle="pill" data-bs-target="#pills-hospitals"
                                            type="button" role="tab" aria-controls="pills-hospitals" aria-selected="true">Hospitals</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-pharmacies-tab" data-bs-toggle="pill" data-bs-target="#pills-pharmacies"
                                             type="button" role="tab" aria-controls="pills-pharmacies" aria-selected="false">Pharmacies</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-providers-tab" data-bs-toggle="pill" data-bs-target="#pills-providers"
                                             type="button" role="tab" aria-controls="pills-providers" aria-selected="false">Providers</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-procedures-tab" data-bs-toggle="pill" data-bs-target="#pills-procedures"
                                            type="button" role="tab" aria-controls="pills-procedures" aria-selected="false">Procedures</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-non-medical-services-tab" data-bs-toggle="pill" data-bs-target="#pills-non-medical-services"
                                           type="button" role="tab" aria-controls="pills-non-medical-services" aria-selected="false">Non-Medical Services</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-social-care-tab" data-bs-toggle="pill" data-bs-target="#pills-social-care"
                                            type="button" role="tab" aria-controls="pills-social-care" aria-selected="false">Social Care</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-ambulatory-surgical-center-tab" data-bs-toggle="pill" data-bs-target="#pills-ambulatory-surgical-center"
                                            type="button" role="tab" aria-controls="pills-ambulatory-surgical-center" aria-selected="false">Ambulatory Surgical Center</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-hospice-tab" data-bs-toggle="pill" data-bs-target="#pills-hospice"
                                            type="button" role="tab" aria-controls="pills-hospice" aria-selected="false" disabled>Procedures</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-home-health-tab" data-bs-toggle="pill" data-bs-target="#pills-home-health"
                                            type="button" role="tab" aria-controls="pills-home-health" aria-selected="false" disabled>Home Health</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link fs-8 p-1 px-2 mb-1 rounded fw-medium" id="pills-skilled-nursing-facility-tab" data-bs-toggle="pill" data-bs-target="#pills-skilled-nursing-facility"
                                            type="button" role="tab" aria-controls="pills-skilled-nursing-facility" aria-selected="false" disabled>Skilled Nursing Facility</button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-wraper">
                                <div class="tab-content" id="pills-tabContent">
                                    {/* hostpital start */}
                                    
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-hospitals" role="tabpanel" aria-labelledby="pills-hospitals-tab" tabindex="0">
                                        <form action="">
                                            <div class="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 class="fw-bold primary-color mb-0">Filter Hospitals</h6>
                                                <button type="reset" class="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between ps-lg-3 mb-3">
                                                <div class="fs-7 text-grey fw-bold">
                                                    CMS Satisfaction Scores
                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                        <i class="bi bi-info-circle"></i>
                                                    </span>
                                                </div>
                                                <div class="star-rating">
                                                    <input type="radio" id="5-stars" name="rating" value="5"/>
                                                    <label for="5-stars" class="star"><i class="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="4-stars" name="rating" value="4"/>
                                                    <label for="4-stars" class="star"><i class="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="3-stars" name="rating" value="3"/>
                                                    <label for="3-stars" class="star"><i class="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="2-stars" name="rating" value="2"/>
                                                    <label for="2-stars" class="star"><i class="bi bi-star-fill"></i></label>
                                                    <input type="radio" id="1-star" name="rating" value="1"/>
                                                    <label for="1-star" class="star"><i class="bi bi-star-fill"></i></label>
                                                </div>
                                            </div>
                                            <div class="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterHospital">
                                                <div class="accordion-item border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-hospital" aria-expanded="false"
                                                            aria-controls="flush-collapse-hospital">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                Procedure Code / DRG
                                                                <span class="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="DRG, Diagnostic Related Group, is a classification system that groups patients with similar characteristics.">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-hospital" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterHospital">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget1">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            
                                                                <label for="hospitalSearch">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="hospitalSearch"
                                                                    class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="cptSearchBtn"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div class="cost-slider d-none">
                                                                <div class="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeDRGhospital" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGhospitalInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGhospitalInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3">
                                                 <button type="button" class="btn btn-type1  px-3">View Results</button> 
                                                {/* <a type="button" class="btn btn-type1 px-3" href="sidebar-search-output-hospital.html">View Results</a> */}
                                            </div>
                                        </form>
                                    </div>
                                    {/* pharmacy start */}
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-pharmacies" role="tabpanel" aria-labelledby="pills-pharmacies-tab" tabindex="0">
                                        <form action="">
                                            <div class="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 class="fw-bold primary-color mb-0">Filter Pharmacies <span class="fs-8 text-sandwych-purple"
                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip"><i
                                                            class="bi bi-info-circle"></i></span></h6>
                                                <button type="reset" class="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-end gap-1 flex-wrap advnc-filter">
                                                <div class="custom-checkbx position-relative mb-1">
                                                    <input class="invisible position-absolute" type="radio" value=""
                                                        id="compoundingChkbx" name="pharmaciesFilter"/>
                                                    <label class="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="compoundingChkbx">
                                                        <span class="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Compounding
                                                    </label>
                                                </div>
                                                <div class="custom-checkbx position-relative mb-1">
                                                    <input class="invisible position-absolute" type="radio" value="" id="retailChkbx"
                                                        name="pharmaciesFilter"/>
                                                    <label class="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="retailChkbx">
                                                        <span class="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Retail
                                                    </label>
                                                </div>
                                                <div class="custom-checkbx position-relative mb-1">
                                                    <input class="invisible position-absolute" type="radio" value="" id="mailOrderChkbx"
                                                        name="pharmaciesFilter"/>
                                                    <label
                                                        class="form-check-label p-1 px-4 rounded-pill border fw-bold position-relative"
                                                        for="mailOrderChkbx">
                                                        <span class="fw-bold px-2 position-absolute start-0">&#10004;</span>
                                                        Mail-Order
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="py-3">
                                                 <button type="button" class="btn btn-type1 px-3">View Results</button> 
                                                <a type="button" class="btn btn-type1 px-3" href="sidebar-search-output-pharmacy.html">View Results</a>
                                            </div>
                                        </form>
                                    </div>
                                    {/* priveders start */}
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-providers" role="tabpanel" aria-labelledby="pills-providers-tab" tabindex="0">
                                        <form action="">
                                            <div class="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 class="fw-bold primary-color mb-0">Filter Providers</h6>
                                                <button type="reset" class="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div class="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterProviders">
                                                <div class="accordion-item border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-providers1" aria-expanded="false"
                                                            aria-controls="flush-collapse-providers1">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                Specialty
                                                                <span class="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers1" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget2">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="providerSpeciality" type="text" value="" class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-providers2" aria-expanded="false"
                                                            aria-controls="flush-collapse-providers2">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                CPT Code
                                                                <span class="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="CPT, or Current Procedural Terminology is a medical code set for billing purposes.">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers2" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget3">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="providerCPT"
                                                                    class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="providerCptBtn"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div id="providerCostContainer" class=" cost-slider d-none">
                                                                <div class="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeCPTproviders" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-providers3"
                                                            aria-expanded="false" aria-controls="flush-collapse-providers3">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                HCPCS Code
                                                                <span class="fs-8 text-sandwych-purple ms-1" data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="HCPCS (Healthcare Common Procedure Coding System) is used to classify medical procedures">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-providers3" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProviders">
                                                        <div class="accordion-body py-3 px-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget4">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="providerHcpcs"
                                                                    class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="providerHcpcsBtn"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div class="cost-slider d-none">
                                                                <div class="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeHCPCSproviders" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSprovidersInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSprovidersInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3">
                                                 <button type="button" class="btn btn-type1 px-3">View Results</button> 
                                                <a type="button" class="btn btn-type1 px-3" href="sidebar-search-output-provider.html">View Results</a>

                                            </div>
                                        </form>
                                    </div>
                                    {/* procedures start */}
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-procedures" role="tabpanel" aria-labelledby="pills-procedures-tab" tabindex="0">
                                        <form action="">
                                            <div class="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 class="fw-bold primary-color mb-0">Filter Procedures</h6>
                                                <button type="reset" class="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div class="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterProcedures">
                                                <div class="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-procedures1" aria-expanded="false"
                                                            aria-controls="flush-collapse-procedures1">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                DRG Code
                                                                <span class="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="DRG, Diagnostic Related Group, is a classification system that groups patients with similar characteristics.">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures1" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget5">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div class="input-no-data">
                                                                    <input id="drgCode" type="text" value="" class="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="drgCodeBtn" class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                            class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div class="cost-slider d-none">
                                                                <div class="hd-type3 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeDRGprocedures" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGproceduresInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="DRGproceduresInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-procedures2" aria-expanded="false"
                                                            aria-controls="flush-collapse-procedures2">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                CPT Code
                                                                <span class="fs-8 text-sandwych-purple ms-1"
                                                                    data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="CPT, or Current Procedural Terminology is a medical code set for billing purposes.">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures2" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget6">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="procedureCpt"
                                                                    class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="procedureCptBtn"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div class="cost-slider d-none">
                                                                <div class="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeCPTprocedures" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="CPTprovidersInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item accordion-disable border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-procedures3"
                                                            aria-expanded="false" aria-controls="flush-collapse-procedures3">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                HCPCS Code
                                                                <span class="fs-8 text-sandwych-purple ms-1" data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="HCPCS (Healthcare Common Procedure Coding System) is used to classify medical procedures">
                                                                    <i class="bi bi-info-circle"></i>
                                                                </span>
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-procedures3" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterProcedures">
                                                        <div class="accordion-body py-3 px-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget7">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                 <label for="tags2">Tags: </label> 
                                                                <div class="input-no-data">
                                                                    <input id="procedureHcpcs"
                                                                    class="input-js form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" id="procedureHcpcsBtn"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                            </div>
                                                            <div class="cost-slider d-none">
                                                                <div class="fs-7 fw-normal text-grey mb-4">
                                                                    Cost Range
                                                                    <span class="fs-8 text-sandwych-purple ms-1"
                                                                        data-bs-toggle="tooltip" data-bs-custom-class="custom-info-popup" data-bs-title="Default tooltip">
                                                                        <i class="bi bi-info-circle"></i>
                                                                    </span>
                                                                </div>
                                                                <div class="price-range-wrap">
                                                                    <div id="sliderCostRangeHCPCSprocedures" class="range-slider"></div>
                                                                    <div class="price-input justify-content-between">
                                                                        <div class="field border rounded-pill fs-8 ps-1">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Min.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSproceduresInputMin" class="input-min border-0 p-0 bg-transparent text-sandwych-purple" value="1750" readonly/></div>
                                                                        </div>
                                                                        <div class="field border rounded-pill fs-8 ps-1 ms-5">
                                                                            <span class="text-grey fw-bold border-end h-100 d-flex align-items-center px-2">Max.</span>
                                                                            <div class="text-sandwych-purple fw-medium d-flex align-items-center px-2 py-1">&dollar;<input type="number" id="HCPCSproceduresInputMax" class="input-max border-0 p-0 bg-transparent text-sandwych-purple" value="22000" readonly/></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3">
                                                 <button type="button" class="btn btn-type1 px-3">View Results</button> 
                                                <a type="button" class="btn btn-type1 px-3" href="sidebar-search-output-procedure.html">View Results</a>
                                            </div>
                                        </form>
                                    </div>
                                    {/* non medical services start */}
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-non-medical-services" role="tabpanel" aria-labelledby="pills-non-medical-services-tab" tabindex="0">
                                        <form action="">
                                            <div class="filter-title-wrp d-flex align-items-center justify-content-between py-3">
                                                <h6 class="fw-bold primary-color mb-0">Filter Non-Medical Services</h6>
                                                <button type="reset" class="btn fw-bold p-0 link-type1">Reset Filters</button>
                                            </div>
                                            <div class="accordion accordion-flush filter-resource-accordion accordion-common px-lg-3"
                                                id="accordionFilterNonMedicalServices">
                                                <div class="accordion-item border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-Non-Medical-Services1" aria-expanded="false"
                                                            aria-controls="flush-collapse-Non-Medical-Services1">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                Category
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-Non-Medical-Services1" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterNonMedicalServices">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget8">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div class="input-no-data">
                                                                    <input id="nonMedServiceCategory" type="text" value="" class="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;{'>'}</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item border-0 content-item mb-3">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button custm-accordion-control align-items-baseline text-grey shadow-none bg-white p-0 collapsed"
                                                            type="button" data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapse-Non-Medical-Services2" aria-expanded="false"
                                                            aria-controls="flush-collapse-Non-Medical-Services2">
                                                            <span class="fs-7 fw-bold mb-2">
                                                                Health Insurance
                                                            </span>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapse-Non-Medical-Services2" class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionFilterNonMedicalServices">
                                                        <div class="accordion-body p-2">
                                                            <div class="ui-widget position-relative mb-3" id="widget9">
                                                                <div class="d-none justify-content-between align-items-center input-has-data">
                                                                    <div class="text-sandwych-purple d-flex fs-6 flex-1">
                                                                        <span class="toggle-search-input">X</span>
                                                                        <span class="ms-2 selected-data flex-grow">Selected Data</span>
                                                                    </div>
                                                                    <button type="button" class="btn border-0 p-0 py-1 text-grey fs-8 search-btn">Search<span class="search-arrow">&nbsp;{">"}</span></button>
                                                                </div>
                                                                <div class="input-no-data">
                                                                    <input id="healthInsurance"
                                                                    class="form-control text-sandwych-purple fs-5 border-0 border-bottom rounded-0 shadow-none ps-0 pe-4"/>
                                                                    <button type="button"
                                                                    class="btn border-0 p-0 py-1 text-grey fs-8">Search<span
                                                                        class="search-arrow">&nbsp;</span></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="py-3">
                                                 <button type="button" class="btn btn-type1 px-3">View Results</button> 
                                                <a type="button" class="btn btn-type1 px-3" href="sidebar-search-output-non-medical.html">View Results</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-social-care" role="tabpanel" aria-labelledby="pills-social-care-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-ambulatory-surgical-center" role="tabpanel" aria-labelledby="pills-ambulatory-surgical-center-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-hospice" role="tabpanel" aria-labelledby="pills-hospice-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-home-health" role="tabpanel" aria-labelledby="pills-home-health-tab" tabindex="0">...</div>
                                    <div class="tab-pane fade border border-start-0 border-end-0 border-bottom-0 border-common py-3" id="pills-skilled-nursing-facility" role="tabpanel" aria-labelledby="pills-skilled-nursing-facility-tab" tabindex="0">...</div>
                                </div>
                            </div>
                        </div>
                        <div class="px-lg-3">
                            <div class="border border-start-0 border-end-0 border-bottom-0 border-common py-3">
                                <div class="pt-3">
                                    <h6 class="fw-bold primary-color mb-lg-3">Capture Results</h6>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex align-items-start pb-3 pt-1">
                                            <span class="d-flex">
                                                <img src="images/save-your-fav-icon.svg" class="img-fluid" alt=""/>
                                            </span>
                                            <div class="ms-2">
                                                <h6 class="primary-color fw-semibold">Save Your Favorites</h6>
                                                <a href="" class="link-type1 text-sandwych-purple small">Create a Login</a>
                                            </div>
                                        </div>
                                        <div class="vr mx-1"></div>
                                        <div class="d-flex align-items-start pb-3 pt-1">
                                            <span class="d-flex">
                                                <img src="images/share-your-search-icon.svg" class="img-fluid" alt=""/>
                                            </span>
                                            <div class="ms-2">
                                                <h6 class="primary-color fw-semibold">Share Your Search</h6>
                                                <a href="mailto:" class="link-type1 text-sandwych-purple small">Email Results</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between flex-wrap bg-tab-grey rounded-start-0 rounded-bottom-4 small p-3">
                        <div class="title-resources primary-color px-lg-3">Already have an account? <a href="" class="link-type1 text-sandwych-purple" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a></div>
                    </div>
                </div>
            </div>
        </div>
       {/* sidebar */}
        <div class="bg-white p-1 map-price-overlay position-absolute end-0 z-3 mt-md-5 me-md-5">
            <div class="row gx-1 gy-1 fs-8 text-white fw-semibold text-center">
                <div class="col-lg-12 col-6">
                    <div class="bg-map-overlay-1 p-3 px-4">
                        $17,376 - $20,031
                    </div>
                </div>
                <div class="col-lg-12 col-6">
                    <div class="bg-map-overlay-2 p-3 px-4">
                        $20,036 - $24,489
                    </div>
                </div>
                <div class="col-lg-12 col-6">
                    <div class="bg-map-overlay-3 p-3 px-4">
                        $24,490 - $27,833
                    </div>
                </div>
                <div class="col-lg-12 col-6">
                    <div class="bg-map-overlay-4 p-3 px-4">
                        $27,834 - $30,543
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="min-vh-100" id="map"></div> */}
        <MapComponent/>

    </main>
  )
}

export default Main