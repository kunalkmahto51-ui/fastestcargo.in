/* =========================================================
   FASTEST CARGO — V2 SCRIPT
========================================================= */


/* =========================================================
   GOOGLE SHEETS TRACKING API
   IMPORTANT: DO NOT CHANGE THIS URL
========================================================= */

const TRACKING_API =
    "https://script.google.com/macros/s/AKfycbzyCMw40nIXExI9mUeo1pmtKlIa6Q22ihJGsOnP-d36D6vPetYLKQMixLsD6CEzoVrIgw/exec";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    setupNavbar();
    setupMobileMenu();
    setupRevealAnimations();
    setupTrackingInput();
    setupPopupClosing();

});


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

function setupNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    const updateNavbar = () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
        passive: true
    });

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    if (!menuToggle || !navLinks) return;


    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    const links =
        navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });


    document.addEventListener("click", event => {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

        }

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

function setupRevealAnimations() {

    const elements =
        document.querySelectorAll(".reveal");

    if (!elements.length) return;


    if (!("IntersectionObserver" in window)) {

        elements.forEach(element => {
            element.classList.add("visible");
        });

        return;
    }


    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }

        );


    elements.forEach((element, index) => {

        /*
           Small stagger without making
           the website feel over-animated.
        */

        element.style.transitionDelay =
            `${Math.min((index % 4) * 70, 210)}ms`;

        observer.observe(element);

    });

}


/* =========================================================
   SERVICE INFORMATION
========================================================= */

const serviceDetails = {

    air: {
    title: "Air Cargo",
    image: "cargo-plane.jpg",
    badge: "FAST TRANSPORTATION",
        
        tagline: "Fast transportation for urgent and time-sensitive shipments.",
        description:
            "Fastest Cargo provides dependable air cargo solutions for shipments where speed and timely movement are important. Our air transportation services are suitable for urgent documents, parcels, samples and commercial consignments moving across supported domestic destinations.",
        features: [
            "Fast movement for time-sensitive shipments",
            "Documents, parcels and commercial cargo",
            "Suitable for urgent business consignments",
            "Door-to-door logistics assistance",
            "Shipment tracking support",
            "Multiple logistics network options"
        ],
        bestFor:
            "Urgent Parcels • Business Shipments • Documents • Samples • Commercial Cargo • Time-Sensitive Deliveries"
    },

    surface: {
    title: "Surface Transport",
    image: "cargo-truck.jpg",
    badge: "ROAD NETWORK",
        tagline: "Reliable and economical road transportation for regular cargo movement.",
        description:
            "Our Surface Transport service provides dependable road-based logistics solutions for parcels, cartons, commercial consignments and regular business cargo. It is a practical option for shipments where cost-effective transportation and dependable network movement are important.",
        features: [
            "Road transportation across supported destinations",
            "Suitable for parcels, cartons and commercial cargo",
            "Cost-effective option for regular shipments",
            "Support for business and bulk dispatch requirements",
            "Door-to-door logistics assistance",
            "Shipment tracking support"
        ],
        bestFor:
            "Commercial Cargo • Cartons • Bulk Shipments • Regular Dispatches • Business Parcels • Non-Urgent Cargo"
    },

    rail: {
    title: "Rail Transport",
    image: "cargo-train.jpg",
    badge: "LONG DISTANCE",
        tagline: "Efficient long-distance movement for suitable cargo requirements.",
        description:
            "Fastest Cargo provides rail transportation solutions for suitable long-distance cargo and parcel requirements. Rail movement can provide an economical transportation option for shipments where larger volumes or longer distances are involved and immediate air movement is not required.",
        features: [
            "Suitable for long-distance cargo movement",
            "Economical transportation option",
            "Support for commercial consignments",
            "Suitable for selected heavier shipment requirements",
            "Route-based transportation planning",
            "Shipment movement assistance"
        ],
        bestFor:
            "Long-Distance Cargo • Commercial Shipments • Larger Parcels • Regular Business Cargo • Economical Movement"
    },

    express: {
    title: "Express Delivery",
    image: "cargo-express.jpg",
    badge: "TIME SENSITIVE",
        tagline: "Priority logistics solutions when delivery speed matters.",
        description:
            "Our Express Delivery service is designed for urgent shipments requiring faster processing and movement. Fastest Cargo helps customers choose suitable express solutions for documents, parcels and business consignments based on destination, urgency and service availability.",
        features: [
            "Priority handling for urgent shipments",
            "Faster transportation options",
            "Documents and parcel movement",
            "Suitable for business-critical consignments",
            "Door-to-door delivery assistance",
            "Tracking support"
        ],
        bestFor:
            "Urgent Documents • Priority Parcels • Business Shipments • Samples • Time-Critical Deliveries"
    },

    document: {
    title: "Document Delivery",
    image: "cargo-document.jpg",
    badge: "SECURE MOVEMENT",
        tagline: "Secure and dependable movement for important documents.",
        description:
            "Fastest Cargo provides document courier solutions for important personal and business documents. We help customers select suitable delivery services according to destination, urgency and service requirements while ensuring professional shipment handling.",
        features: [
            "Secure document movement",
            "Domestic courier solutions",
            "Suitable for business and personal documents",
            "Express options subject to availability",
            "Door-to-door delivery assistance",
            "Shipment tracking support"
        ],
        bestFor:
            "Business Documents • Agreements • Applications • Certificates • Envelopes • Important Papers"
    },

    parcel: {
    title: "Parcel Delivery",
    image: "cargo-parcel.jpg",
    badge: "EVERYDAY SHIPPING",
        tagline: "Flexible parcel shipping for personal and business requirements.",
        description:
            "Fastest Cargo provides convenient parcel delivery solutions for personal shipments, business parcels and regular commercial dispatches. Transportation options can be selected according to parcel size, destination, urgency and required delivery speed.",
        features: [
            "Personal and commercial parcel delivery",
            "Multiple transportation options",
            "Suitable for regular business dispatches",
            "Door-to-door logistics assistance",
            "Domestic destination coverage",
            "Shipment tracking support"
        ],
        bestFor:
            "Personal Parcels • Business Parcels • Samples • Boxes • Regular Dispatches • Commercial Packages"
    },

    ecommerce: {
    title: "E-Commerce Logistics",
    image: "cargo-warehouse.jpg",
    badge: "BUSINESS LOGISTICS",
        tagline: "Flexible shipping support for online sellers and growing businesses.",
        description:
            "Fastest Cargo supports e-commerce sellers, retailers and businesses with logistics solutions designed for regular parcel dispatch requirements. Our network can support different shipment volumes and delivery requirements through suitable courier and transportation partners.",
        features: [
            "Regular parcel dispatch support",
            "Solutions for online sellers and retailers",
            "Multiple courier and logistics networks",
            "Support for growing shipment volumes",
            "Tracking assistance",
            "Flexible business shipping solutions"
        ],
        bestFor:
            "Online Sellers • D2C Brands • Retailers • Marketplace Sellers • SMEs • Regular Business Dispatches"
    },

    international: {
    title: "International Shipping",
    image: "cargo-ship.jpg",
    badge: "GLOBAL SHIPPING",
        tagline: "Courier and cargo solutions for shipments moving across global destinations.",
        description:
            "Fastest Cargo provides international courier and cargo solutions for eligible documents, parcels and commercial consignments. We assist customers in selecting suitable international shipping options according to destination, shipment type, urgency, documentation requirements and carrier availability.",
        features: [
            "International document and parcel shipping",
            "Commercial cargo assistance",
            "Multiple international carrier options",
            "Shipping documentation guidance",
            "Express options for supported destinations",
            "Shipment tracking assistance"
        ],
        bestFor:
            "International Documents • Parcels • Samples • Commercial Shipments • Business Consignments"
    }

};


/* =========================================================
   OPEN SERVICE POPUP
========================================================= */

function openService(serviceName) {

    const popup = document.getElementById("servicePopup");
    const title = document.getElementById("servicePopupTitle");
    const text = document.getElementById("servicePopupText");
    const image = document.getElementById("servicePopupImage");
    const badge = document.getElementById("servicePopupBadge");

    const service = serviceDetails[serviceName];

    if (!popup || !title || !text || !service) {
        return;
    }

    title.textContent = service.title;

    if (image) {
        image.src = service.image;
        image.alt = service.title;
    }

    if (badge) {
        badge.textContent = service.badge;
    }

    text.innerHTML = `
        <span class="service-popup-tagline">
            ${service.tagline}
        </span>

        <span class="service-popup-description">
            ${service.description}
        </span>

        <span class="service-popup-subtitle">
            Service Highlights
        </span>

        <span class="service-popup-features">
            ${service.features
                .map(feature => `<span>✓ ${feature}</span>`)
                .join("")}
        </span>

        <span class="service-popup-subtitle">
            Best Suited For
        </span>

        <span class="service-popup-bestfor">
            ${service.bestFor}
        </span>
    `;

    popup.classList.add("active");
    document.body.classList.add("popup-open");
}

/* =========================================================
   CLOSE SERVICE POPUP
========================================================= */

function closeService() {

    const popup =
        document.getElementById("servicePopup");

    if (!popup) return;


    popup.classList.remove("active");

    document.body.classList.remove(
        "popup-open"
    );

}


/* =========================================================
   OPEN TRACKING POPUP
========================================================= */

function openTracking() {

    const popup =
        document.getElementById(
            "trackingPopup"
        );

    if (!popup) return;


    popup.classList.add("active");

    document.body.classList.add(
        "popup-open"
    );


    setTimeout(() => {

        const input =
            document.getElementById(
                "trackingNumber"
            );

        if (input) {
            input.focus();
        }

    }, 250);

}


/* =========================================================
   CLOSE TRACKING POPUP
========================================================= */

function closeTracking() {

    const popup =
        document.getElementById(
            "trackingPopup"
        );

    if (!popup) return;


    popup.classList.remove("active");

    document.body.classList.remove(
        "popup-open"
    );

}


/* =========================================================
   POPUP BACKGROUND / ESC CLOSE
========================================================= */

function setupPopupClosing() {

    const servicePopup =
        document.getElementById(
            "servicePopup"
        );

    const trackingPopup =
        document.getElementById(
            "trackingPopup"
        );


    if (servicePopup) {

        servicePopup.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    servicePopup
                ) {
                    closeService();
                }

            }
        );

    }


    if (trackingPopup) {

        trackingPopup.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    trackingPopup
                ) {
                    closeTracking();
                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeService();

                closeTracking();

            }

        }
    );

}


/* =========================================================
   ENTER KEY TO TRACK
========================================================= */

function setupTrackingInput() {

    const input =
        document.getElementById(
            "trackingNumber"
        );

    if (!input) return;


    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                event.preventDefault();

                trackShipment();

            }

        }
    );

}


/* =========================================================
   TRACK SHIPMENT
========================================================= */

async function trackShipment() {

    const input =
        document.getElementById(
            "trackingNumber"
        );

    const result =
        document.getElementById(
            "trackingResult"
        );

    const button =
        document.getElementById(
            "trackButton"
        );


    if (
        !input ||
        !result
    ) {
        return;
    }


    const trackingNumber =
        input.value.trim();


    /* EMPTY INPUT */

    if (!trackingNumber) {

        result.innerHTML = `
            <div class="tracking-error">

                <h3>
                    Enter Tracking Number
                </h3>

                <p>
                    Please enter your Fastest Cargo
                    tracking number to continue.
                </p>

            </div>
        `;

        input.focus();

        return;

    }


    /* LOADING STATE */

    if (button) {

        button.disabled = true;

        button.innerHTML = `
            Tracking...
        `;

    }


    result.innerHTML = `
        <p>
            Checking shipment status...
        </p>
    `;


    try {

        const url =
            `${TRACKING_API}?tracking=${encodeURIComponent(
                trackingNumber
            )}`;


        const response =
            await fetch(url, {
                method: "GET",
                cache: "no-store"
            });


        if (!response.ok) {

            throw new Error(
                `HTTP ${response.status}`
            );

        }


        const data =
            await response.json();


        /*
           Different Apps Script versions
           sometimes return data in slightly
           different shapes.

           This keeps the frontend flexible.
        */

        const shipment =
            extractShipment(data);


        if (!shipment) {

            showTrackingNotFound(
                result,
                trackingNumber
            );

            return;

        }


        renderTrackingResult(
            result,
            shipment,
            data,
            trackingNumber
        );


    } catch (error) {

        console.error(
            "Fastest Cargo tracking error:",
            error
        );


        result.innerHTML = `
            <div class="tracking-error">

                <h3>
                    Unable to Track Shipment
                </h3>

                <p>
                    We could not retrieve tracking
                    information right now. Please
                    try again shortly or contact
                    Fastest Cargo for assistance.
                </p>

            </div>
        `;

    } finally {

        if (button) {

            button.disabled = false;

            button.innerHTML = `
                Track Shipment
                <span>→</span>
            `;

        }

    }

}


/* =========================================================
   EXTRACT SHIPMENT DATA
========================================================= */

function extractShipment(data) {

    if (!data) return null;


    /*
       Common error / not-found responses.
    */

    if (
        data.success === false ||
        data.found === false ||
        data.status === "not_found"
    ) {
        return null;
    }


    /*
       If API returns:
       { shipment: {...} }
    */

    if (
        data.shipment &&
        typeof data.shipment === "object"
    ) {
        return data.shipment;
    }


    /*
       If API returns:
       { data: {...} }
    */

    if (
        data.data &&
        !Array.isArray(data.data) &&
        typeof data.data === "object"
    ) {
        return data.data;
    }


    /*
       If API returns:
       { data: [ {...} ] }
    */

    if (
        Array.isArray(data.data) &&
        data.data.length
    ) {
        return data.data[0];
    }


    /*
       If API directly returns shipment fields.
    */

    const hasShipmentFields =

        data.trackingNumber ||
        data.tracking_number ||
        data.tracking ||
        data.customer ||
        data.from ||
        data.to ||
        data.mode ||
        data.currentLocation ||
        data.current_location ||
        data["Tracking Number"] ||
        data["tracking number"];


    if (hasShipmentFields) {
        return data;
    }


    return null;

}


/* =========================================================
   TRACKING RESULT
========================================================= */

function renderTrackingResult(
    result,
    shipment,
    rawData,
    searchedTrackingNumber
) {

    const trackingNumber =
        getValue(
            shipment,
            [
                "trackingNumber",
                "tracking_number",
                "tracking",
                "Tracking Number",
                "tracking number"
            ],
            searchedTrackingNumber
        );


    const customer =
        getValue(
            shipment,
            [
                "customer",
                "Customer",
                "customerName",
                "customer_name"
            ]
        );


    const from =
        getValue(
            shipment,
            [
                "from",
                "From",
                "origin",
                "Origin"
            ]
        );


    const to =
        getValue(
            shipment,
            [
                "to",
                "To",
                "destination",
                "Destination"
            ]
        );


    const mode =
        getValue(
            shipment,
            [
                "mode",
                "Mode",
                "transportMode",
                "transport_mode"
            ]
        );


    const status =
        getValue(
            shipment,
            [
                "status",
                "Status"
            ]
        );


    const bookedDate =
        getValue(
            shipment,
            [
                "bookedDate",
                "booked_date",
                "Booked Date",
                "booked date"
            ]
        );


    const expectedDate =
        getValue(
            shipment,
            [
                "expectedDate",
                "expected_date",
                "Expected Date",
                "expected date"
            ]
        );


    const currentLocation =
        getValue(
            shipment,
            [
                "currentLocation",
                "current_location",
                "Current Location",
                "current location",
                "location",
                "Location"
            ]
        );


    let history =
        extractHistory(
            rawData,
            shipment
        );


    result.innerHTML = `

        <div class="tracking-success">

            <h3>
                Shipment Found
            </h3>

            <p>
                <strong>
                    Tracking Number:
                </strong>

                ${escapeHTML(trackingNumber)}
            </p>


            ${
                customer
                ? `
                    <p>
                        <strong>
                            Customer:
                        </strong>

                        ${escapeHTML(customer)}
                    </p>
                `
                : ""
            }


            ${
                from
                ? `
                    <p>
                        <strong>
                            From:
                        </strong>

                        ${escapeHTML(from)}
                    </p>
                `
                : ""
            }


            ${
                to
                ? `
                    <p>
                        <strong>
                            To:
                        </strong>

                        ${escapeHTML(to)}
                    </p>
                `
                : ""
            }


            ${
                mode
                ? `
                    <p>
                        <strong>
                            Mode:
                        </strong>

                        ${escapeHTML(mode)}
                    </p>
                `
                : ""
            }


            ${
                status
                ? `
                    <p>
                        <strong>
                            Status:
                        </strong>

                        ${escapeHTML(status)}
                    </p>
                `
                : ""
            }


            ${
                bookedDate
                ? `
                    <p>
                        <strong>
                            Booked Date:
                        </strong>

                        ${escapeHTML(
                            formatDisplayDate(
                                bookedDate
                            )
                        )}
                    </p>
                `
                : ""
            }


            ${
                expectedDate
                ? `
                    <p>
                        <strong>
                            Expected Date:
                        </strong>

                        ${escapeHTML(
                            formatDisplayDate(
                                expectedDate
                            )
                        )}
                    </p>
                `
                : ""
            }


            ${
                currentLocation
                ? `
                    <p>
                        <strong>
                            Current Location:
                        </strong>

                        ${escapeHTML(
                            currentLocation
                        )}
                    </p>
                `
                : ""
            }


            ${
                history.length
                ? buildTrackingTimeline(
                    history
                )
                : ""
            }

        </div>
    `;


    /*
       Make delivered latest event green.
    */

    highlightDeliveredEvents(result);

}


/* =========================================================
   HISTORY EXTRACTION
========================================================= */

function extractHistory(
    rawData,
    shipment
) {

    let history = [];


    const possibilities = [

        rawData?.history,

        rawData?.trackingHistory,

        rawData?.tracking_history,

        rawData?.events,

        rawData?.timeline,

        rawData?.data?.history,

        rawData?.data?.trackingHistory,

        rawData?.data?.events,

        shipment?.history,

        shipment?.trackingHistory,

        shipment?.tracking_history,

        shipment?.events,

        shipment?.timeline

    ];


    for (const value of possibilities) {

        if (
            Array.isArray(value) &&
            value.length
        ) {

            history = value;

            break;

        }

    }


    return history;

}


/* =========================================================
   BUILD TRACKING TIMELINE
========================================================= */

function buildTrackingTimeline(history) {

    if (!Array.isArray(history)) {
        return "";
    }


    const items =
        history
            .filter(Boolean)
            .map((event, index) => {

                const status =
                    getValue(
                        event,
                        [
                            "status",
                            "Status",
                            "event",
                            "Event"
                        ],
                        "Shipment Update"
                    );


                const location =
                    getValue(
                        event,
                        [
                            "location",
                            "Location",
                            "currentLocation",
                            "current_location"
                        ]
                    );


                const date =
                    getValue(
                        event,
                        [
                            "date",
                            "Date",
                            "eventDate",
                            "event_date"
                        ]
                    );


                const time =
                    getValue(
                        event,
                        [
                            "time",
                            "Time",
                            "eventTime",
                            "event_time"
                        ]
                    );


                const normalizedStatus =
                    String(status)
                        .toLowerCase();


                const delivered =
                    normalizedStatus.includes(
                        "delivered"
                    );


                return `

                    <div
                        class="timeline-item ${
                            delivered
                                ? "delivered-event"
                                : ""
                        }"
                    >

                        <div class="timeline-marker">

                            <span
                                class="timeline-dot"
                            ></span>

                            ${
                                index !==
                                history.length - 1
                                ? `
                                    <span
                                        class="timeline-line"
                                    ></span>
                                `
                                : ""
                            }

                        </div>


                        <div class="timeline-content">

                            <h4
                                data-status="${escapeHTML(
                                    normalizedStatus
                                )}"
                            >
                                ${escapeHTML(
                                    status
                                )}
                            </h4>


                            ${
                                location
                                ? `
                                    <p class="timeline-location">
                                        📍 ${escapeHTML(
                                            location
                                        )}
                                    </p>
                                `
                                : ""
                            }


                            ${
                                date || time
                                ? `
                                    <p class="timeline-date">

                                        ${
                                            date
                                            ? escapeHTML(
                                                formatDisplayDate(
                                                    date
                                                )
                                            )
                                            : ""
                                        }

                                        ${
                                            date && time
                                            ? " • "
                                            : ""
                                        }

                                        ${
                                            time
                                            ? escapeHTML(
                                                formatDisplayTime(
                                                    time
                                                )
                                            )
                                            : ""
                                        }

                                    </p>
                                `
                                : ""
                            }

                        </div>

                    </div>
                `;

            })
            .join("");


    return `

        <div class="tracking-history">

            <h3>
                Shipment Journey
            </h3>

            <div class="tracking-timeline">
                ${items}
            </div>

        </div>

    `;

}


/* =========================================================
   DELIVERED STATUS STYLING
========================================================= */

function highlightDeliveredEvents(container) {

    const deliveredEvents =
        container.querySelectorAll(
            ".delivered-event"
        );


    deliveredEvents.forEach(event => {

        const dot =
            event.querySelector(
                ".timeline-dot"
            );

        const heading =
            event.querySelector(
                ".timeline-content h4"
            );


        if (dot) {

            dot.style.background =
                "#16a34a";

            dot.style.borderColor =
                "#bbf7d0";

        }


        if (heading) {

            heading.style.color =
                "#15803d";

        }

    });

}


/* =========================================================
   TRACKING NOT FOUND
========================================================= */

function showTrackingNotFound(
    result,
    trackingNumber
) {

    result.innerHTML = `

        <div class="tracking-error">

            <h3>
                Shipment Not Found
            </h3>

            <p>
                We could not find a Fastest Cargo
                shipment for tracking number
                <strong>
                    ${escapeHTML(
                        trackingNumber
                    )}
                </strong>.
            </p>

            <p>
                Please check the number and
                try again.
            </p>

        </div>

    `;

}


/* =========================================================
   GET OBJECT VALUE
========================================================= */

function getValue(
    object,
    keys,
    fallback = ""
) {

    if (!object) return fallback;


    for (const key of keys) {

        const value =
            object[key];


        if (
            value !== undefined &&
            value !== null &&
            String(value).trim() !== ""
        ) {

            return String(value).trim();

        }

    }


    return fallback;

}


/* =========================================================
   DATE FORMATTING
========================================================= */

function formatDisplayDate(value) {

    if (!value) return "";


    const stringValue =
        String(value).trim();


    /*
       Keep dd/mm/yyyy or similar
       human-readable values untouched.
    */

    if (
        /^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}$/
            .test(stringValue)
    ) {

        return stringValue;

    }


    const date =
        new Date(stringValue);


    if (Number.isNaN(date.getTime())) {

        return stringValue;

    }


    return date.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric"
        }
    );

}


/* =========================================================
   TIME FORMATTING
========================================================= */

function formatDisplayTime(value) {

    if (!value) return "";


    const stringValue =
        String(value).trim();


    /*
       Already readable time.
    */

    if (
        /^\d{1,2}:\d{2}/
            .test(stringValue)
    ) {

        return stringValue;

    }


    const date =
        new Date(stringValue);


    if (Number.isNaN(date.getTime())) {

        return stringValue;

    }


    return date.toLocaleTimeString(
        "en-IN",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

}


/* =========================================================
   HTML SAFETY
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   OPTIONAL ACTIVE NAV LINK WHILE SCROLLING
========================================================= */

const pageSections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        '.nav-links a[href^="#"]'
    );


function updateActiveNavigation() {

    if (
        !pageSections.length ||
        !navigationLinks.length
    ) {
        return;
    }


    let currentSection = "";


    pageSections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >=
            sectionTop
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove(
            "active-link"
        );


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add(
                "active-link"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest(
                'a[href^="#"]'
            );


        if (!link) return;


        const targetId =
            link.getAttribute("href");


        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(
                targetId
            );


        if (!target) return;


        event.preventDefault();


        const navbar =
            document.getElementById(
                "navbar"
            );


        const navbarHeight =
            navbar
                ? navbar.offsetHeight
                : 75;


        const position =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;


        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

    }
);