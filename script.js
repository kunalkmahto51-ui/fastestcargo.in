const serviceDetails = {

    air: {
        title: "✈️ Air Cargo",
        text: "Our Air Cargo service is designed for urgent and time-sensitive shipments that need faster transportation. It is ideal for important business documents, commercial parcels, samples and other shipments where delivery speed is a priority. We focus on safe handling, efficient movement and dependable transportation of your shipment."
    },

    surface: {
        title: "🚛 Surface Transport",
        text: "Our Surface Transport service provides a practical and cost-effective solution for moving parcels, documents and commercial cargo across destinations. It is suitable for regular shipments that do not require air transportation, with a focus on dependable road-based movement and careful handling."
    },

    rail: {
        title: "🚆 Rail Transport",
        text: "Our Rail Transport service provides an efficient option for dependable long-distance movement of parcels and cargo. It is suitable when economical and reliable transportation is important, helping businesses and individuals move shipments efficiently across longer distances."
    },

    express: {
        title: "⚡ Express Delivery",
        text: "Our Express Delivery service is designed for shipments where time matters most. It is suitable for urgent documents, parcels, business requirements and other time-sensitive shipments that require faster transportation. We focus on efficient handling and quick movement to reduce unnecessary delays."
    },

    document: {
        title: "📄 Document Delivery",
        text: "Our Document Delivery service provides secure and reliable transportation for important personal and business documents. From business paperwork and agreements to other time-sensitive documents, we provide delivery solutions designed around your requirements, with attention to safe handling and dependable transportation."
    },

    parcel: {
        title: "📦 Parcel Delivery",
        text: "Our Parcel Delivery service is suitable for individuals, businesses and regular dispatch requirements. Whether you are sending personal packages, business parcels or commercial shipments, we provide convenient transportation solutions with careful handling to make parcel movement simple, reliable and efficient."
    },

    ecommerce: {
    title: "🛒 E-Commerce Logistics",
    text: "Fastest Cargo provides comprehensive E-Commerce Logistics solutions for online sellers, retailers, distributors and businesses with regular shipping requirements. We handle a wide range of e-commerce products, with extensive experience in the transportation of electronic devices and appliances. From watches, smartwatches, mobile accessories and other compact electronic products to larger appliances such as televisions, air conditioners, refrigerators and other consumer electronics, we provide shipping solutions based on the size, weight and transportation requirements of each shipment. Our e-commerce services support both individual orders and regular bulk dispatch requirements, with a focus on careful shipment handling, efficient movement and dependable transportation. Depending on the shipment and destination, suitable Air, Surface and other logistics solutions can be arranged to balance delivery speed and cost. Whether you are an emerging online seller or an established business handling regular orders, Fastest Cargo aims to provide flexible and reliable logistics support that helps keep your e-commerce shipments moving smoothly."
},

    international: {
    title: "🌍 International Shipping",
    text: "Fastest Cargo provides reliable international courier and cargo solutions for documents, parcels, business samples and commercial shipments across global destinations. We support both individuals and businesses with international shipping requirements, from urgent document delivery and personal parcels to regular commercial consignments. Depending on the destination, shipment type and delivery requirement, we help arrange suitable international air courier and cargo solutions through established logistics and courier networks, including leading international carriers such as DHL. Our focus is on safe shipment handling, efficient dispatch, dependable transit and convenient tracking support throughout the delivery process. We also assist customers with the basic documentation and shipping requirements involved in international dispatches, helping make the process easier and more convenient. Whether you are sending an urgent document, business sample, parcel or commercial shipment overseas, Fastest Cargo aims to provide a smooth, reliable and efficient international shipping experience."
}

};


function openService(service) {

    const details = serviceDetails[service];

    if (!details) {
        return;
    }

    const popup = document.getElementById("servicePopup");

    const title = document.getElementById("servicePopupTitle");
    const text = document.getElementById("servicePopupText");

    if (!popup || !title || !text) {
        alert("Service popup error: HTML elements not found.");
        return;
    }

    title.textContent = details.title;
    text.textContent = details.text;

    popup.classList.add("active");
}


function closeService() {

    const popup = document.getElementById("servicePopup");

    if (popup) {
        popup.classList.remove("active");
    }

}


/* =========================================
   FASTEST CARGO TRACKING
========================================= */

const trackingAPI =
    "https://script.google.com/macros/s/AKfycbzyCMw40nIXExI9mUeo1pmtKlIa6Q22ihJGsOnP-d36D6vPetYLKQMixLsD6CEzoVrIgw/exec";


function openTracking() {

    const popup = document.getElementById("trackingPopup");

    if (popup) {
        popup.classList.add("active");

        const input = document.getElementById("trackingNumber");

        if (input) {
            input.focus();
        }
    }
}


function closeTracking() {

    const popup = document.getElementById("trackingPopup");

    if (popup) {
        popup.classList.remove("active");
    }
}


async function trackShipment() {

    const input = document.getElementById("trackingNumber");
    const resultBox = document.getElementById("trackingResult");
    const button = document.getElementById("trackButton");

    if (!input || !resultBox || !button) {
        return;
    }

    const trackingNumber = input.value.trim();

    if (!trackingNumber) {
        resultBox.innerHTML =
            "<p>Please enter your tracking number.</p>";
        return;
    }

    button.disabled = true;
    button.textContent = "Tracking...";

    resultBox.innerHTML =
        "<p>Checking shipment status...</p>";

    try {

        const response = await fetch(
            trackingAPI + "?tracking=" + encodeURIComponent(trackingNumber)
        );

        const data = await response.json();

        if (data.success) {

            const bookedDate = formatDate(data.bookedDate);
            const expectedDate = formatDate(data.expectedDate);

            let historyHTML = "";

            if (data.history && data.history.length > 0) {

                historyHTML = `
                    <div class="tracking-history">

                        <h3>Shipment Journey</h3>

                        <div class="tracking-timeline">
                `;

                data.history.forEach(function(item) {

                    historyHTML += `
                        <div class="timeline-item">

                            <div class="timeline-marker">
                                <span class="timeline-dot"></span>
                                <span class="timeline-line"></span>
                            </div>

                            <div class="timeline-content">

                                <h4 data-status="${String(item.status || "").toLowerCase()}">
   <h4 data-status="${String(item.status || "").trim().toLowerCase()}">
    ${item.status || "Shipment Update"}
</h4>
</h4>
                                <p class="timeline-location">
                                    📍 ${item.location || "Location unavailable"}
                                </p>

                                <p class="timeline-date">
    ${formatHistoryDate(item.date)}
    ${item.time ? " • " + formatHistoryTime(item.time) : ""}
</p>

                            </div>

                        </div>
                    `;
                });

                historyHTML += `
                        </div>
                    </div>
                `;
            }

            resultBox.innerHTML = `
                <div class="tracking-success">

                    <h3>Shipment Found ✓</h3>

                    <p>
                        <strong>Tracking Number:</strong>
                        ${data.trackingNo}
                    </p>

                    <p>
                        <strong>Customer:</strong>
                        ${data.customer}
                    </p>

                    <p>
                        <strong>From:</strong>
                        ${data.from}
                    </p>

                    <p>
                        <strong>To:</strong>
                        ${data.to}
                    </p>

                    <p>
                        <strong>Mode:</strong>
                        ${data.mode || "—"}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        ${data.status || "—"}
                    </p>

                    <p>
                        <strong>Current Location:</strong>
                        ${data.currentLocation || "—"}
                    </p>

                    <p>
                        <strong>Booked:</strong>
                        ${bookedDate}
                    </p>

                    <p>
                        <strong>Expected Delivery:</strong>
                        ${expectedDate}
                    </p>

                    ${historyHTML}

                </div>
            `;

        } else {

            resultBox.innerHTML = `
                <div class="tracking-error">
                    <h3>Shipment Not Found</h3>
                    <p>${data.message || "Tracking number not found."}</p>
                    <p>Please check your tracking number and try again.</p>
                </div>
            `;
        }

    } catch (error) {

        console.error("Tracking Error:", error);

        resultBox.innerHTML = `
            <div class="tracking-error">
                <h3>Unable to Track Shipment</h3>
                <p>Please try again in a moment.</p>
            </div>
        `;
    }

    button.disabled = false;
    button.textContent = "Track Shipment";
}

function formatDate(dateValue) {

    if (!dateValue) {
        return "—";
    }

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}
function formatHistoryDate(dateValue) {

    if (!dateValue) {
        return "";
    }

    const date = new Date(dateValue);

    if (isNaN(date.getTime())) {
        return dateValue;
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}


function formatHistoryTime(timeValue) {

    if (!timeValue) {
        return "";
    }

    const date = new Date(timeValue);

    if (isNaN(date.getTime())) {
        return timeValue;
    }

    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}


/* =========================================
   POPUP BACKGROUND CLICK
========================================= */

document.addEventListener("click", function(event) {

    const servicePopup = document.getElementById("servicePopup");

    if (servicePopup && event.target === servicePopup) {
        closeService();
    }

    const trackingPopup = document.getElementById("trackingPopup");

    if (trackingPopup && event.target === trackingPopup) {
        closeTracking();
    }

});


/* =========================================
   ENTER KEY FOR TRACKING
========================================= */

document.addEventListener("keydown", function(event) {

    const input = document.getElementById("trackingNumber");

    if (
        input &&
        event.key === "Enter" &&
        document.activeElement === input
    ) {
        trackShipment();
    }

});
