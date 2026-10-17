"use strict";

/* ==========================================
   اطلاعات انتخاب‌های دعوتنامه
========================================== */

const invitationData = {
    gender: null,
    outfit: null,
    place: null,
    gift: null
};


/* ==========================================
   طراحی هشت استایل لباس
========================================== */

const outfitLooks = {
    angel: {
        label: "فرشته",
        color: "#eee2cd",
        backdrop: "#cba17c",
        body: `
            <path d="M86 151 Q100 143 108 145 L120 157 L132 145 Q149 144 158 154 L178 249 Q120 270 62 249Z" fill="#eee2cd"/>
            <path d="M109 147 L120 161 L131 147 L142 157 L120 181 L98 157Z" fill="#fff6e6"/>
            <path d="M76 241 Q120 255 164 241" fill="none" stroke="#c3a584" stroke-width="2"/>
        `,
        back: `
            <path d="M86 166 C47 138 42 185 72 214 L100 224 L100 187Z" fill="#f1dfc0" stroke="#d4b995" stroke-width="2"/>
            <path d="M154 166 C193 138 198 185 168 214 L140 224 L140 187Z" fill="#f1dfc0" stroke="#d4b995" stroke-width="2"/>
            <ellipse cx="120" cy="30" rx="21" ry="7" fill="none" stroke="#f4d7a0" stroke-width="4"/>
        `,
        accessory: `
            <path d="M91 171 L78 200 M149 171 L162 200" stroke="#fff7e8" stroke-width="4" stroke-linecap="round"/>
        `
    },

    devil: {
        label: "شیطان",
        color: "#843d38",
        backdrop: "#834b42",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L178 242 Q120 261 62 242Z" fill="#843d38"/>
            <path d="M107 146 L120 162 L133 146" fill="none" stroke="#e8b17c" stroke-width="3"/>
            <path d="M91 174 L105 187 M149 174 L135 187" stroke="#e5a66f" stroke-width="3"/>
        `,
        back: `
            <path d="M87 210 C46 235 70 258 111 245" fill="none" stroke="#ad5540" stroke-width="8" stroke-linecap="round"/>
            <path d="M105 145 L90 113 L112 129Z M135 145 L150 113 L128 129Z" fill="#843d38" stroke="#d79269" stroke-width="2"/>
        `,
        accessory: `
            <path d="M102 193 L120 207 L138 193" fill="none" stroke="#e8bb8a" stroke-width="3"/>
        `
    },

    sport: {
        label: "اسپورت",
        color: "#53766e",
        backdrop: "#54786c",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L176 242 Q120 258 64 242Z" fill="#53766e"/>
            <path d="M101 150 L113 244 M111 151 L123 246" stroke="#d4ded2" stroke-width="3"/>
            <path d="M133 155 L148 232" stroke="#d4ded2" stroke-width="3"/>
            <path d="M89 176 L107 184 L99 200 L83 193Z" fill="#74978c"/>
        `,
        back: "",
        accessory: `
            <path d="M93 177 Q120 188 148 177" stroke="#dbe4d8" stroke-width="3" fill="none"/>
        `
    },

    formal: {
        label: "رسمی",
        color: "#343e4a",
        backdrop: "#49515b",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L176 242 Q120 260 64 242Z" fill="#343e4a"/>
            <path d="M108 145 L120 160 L132 145 L143 160 L127 190 L120 179 L113 190 L97 160Z" fill="#f1e7d8"/>
            <path d="M117 166 L123 166 L130 205 L120 216 L110 205Z" fill="#9e4937"/>
            <path d="M97 158 L82 180 L99 197 M143 158 L158 180 L141 197" stroke="#69717a" stroke-width="3" fill="none"/>
        `,
        back: "",
        accessory: `
            <circle cx="137" cy="222" r="2.5" fill="#d8bd8e"/>
        `
    },

    casual: {
        label: "کژوال",
        color: "#7c6952",
        backdrop: "#8b7257",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L176 242 Q120 258 64 242Z" fill="#7c6952"/>
            <path d="M106 147 L120 160 L134 147" fill="none" stroke="#d4bda0" stroke-width="4"/>
            <rect x="132" y="194" width="22" height="24" rx="3" fill="#6d5948" stroke="#b39875" stroke-width="1.5"/>
        `,
        back: "",
        accessory: `
            <path d="M88 172 L101 185" stroke="#bca58a" stroke-width="3"/>
        `
    },

    autumn: {
        label: "پاییزی",
        color: "#a75e3f",
        backdrop: "#b66e48",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L176 242 Q120 258 64 242Z" fill="#a75e3f"/>
            <path d="M105 146 L120 161 L112 204 L92 159Z" fill="#d79a68"/>
            <path d="M135 146 L120 161 L129 204 L148 159Z" fill="#e4b782"/>
            <path d="M110 165 L130 165 L134 180 L106 180Z" fill="#784337"/>
            <path d="M96 193 L144 193 M99 205 L141 205" stroke="#c98257" stroke-width="2"/>
        `,
        back: "",
        accessory: `
            <path d="M113 178 L128 178 L125 233 L116 233Z" fill="#e3ba82"/>
            <path d="M109 178 L132 178" stroke="#f0d3a4" stroke-width="3"/>
        `
    },

    royal: {
        label: "سلطنتی",
        color: "#55405f",
        backdrop: "#65506f",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L182 250 Q120 268 58 250Z" fill="#55405f"/>
            <path d="M108 147 L120 164 L132 147 L145 164 L127 201 L120 191 L113 201 L95 164Z" fill="#c9a56b"/>
            <path d="M120 166 L127 185 L120 198 L113 185Z" fill="#843d38"/>
            <path d="M71 229 L169 229" stroke="#c9a56b" stroke-width="3"/>
            <path d="M78 241 L162 241" stroke="#c9a56b" stroke-width="2"/>
        `,
        back: "",
        accessory: `
            <path d="M96 108 L96 83 L108 96 L120 75 L132 96 L144 83 L144 108Z" fill="#d6b268" stroke="#f1d99f" stroke-width="2"/>
            <circle cx="120" cy="89" r="4" fill="#a44e47"/>
            <circle cx="103" cy="97" r="3" fill="#e7c989"/>
            <circle cx="137" cy="97" r="3" fill="#e7c989"/>
        `
    },

    mysterious: {
        label: "مرموز",
        color: "#343436",
        backdrop: "#4b4647",
        body: `
            <path d="M84 151 Q99 143 108 145 L120 157 L132 145 Q149 144 158 154 L176 242 Q120 260 64 242Z" fill="#343436"/>
            <path d="M108 146 L120 160 L109 193 L95 159Z" fill="#51494a"/>
            <path d="M132 146 L120 160 L131 193 L145 159Z" fill="#51494a"/>
            <path d="M96 199 L144 199" stroke="#696061" stroke-width="2"/>
        `,
        back: "",
        accessory: `
            <path d="M85 94 H113 L119 101 L125 94 H153 L148 111 H125 L120 104 L113 111 H90Z" fill="#242528" stroke="#c6a386" stroke-width="2"/>
            <path d="M113 101 H125" stroke="#c6a386" stroke-width="2"/>
        `
    }
};


/* ==========================================
   ساخت کاراکتر تصویری
========================================== */

function characterSvg(gender, outfitKey) {
    const female = gender === "female";
    const outfit = outfitLooks[outfitKey] || outfitLooks.casual;

    const backHair = female
        ? `
            <path d="M78 100 C62 45 85 24 119 24 C162 23 181 53 163 105 L169 166 C157 195 142 201 120 196 C98 201 81 190 72 166Z" fill="#42251f"/>
          `
        : `
            <path d="M82 87 C77 49 93 27 121 27 C150 27 165 48 160 87 L148 107 L91 107Z" fill="#30211d"/>
          `;

    const frontHair = female
        ? `
            <path d="M84 75 C88 35 152 34 157 77 C148 66 140 65 130 68 C115 71 104 63 96 77 L94 100 L85 105Z" fill="#42251f"/>
            <path d="M85 85 C78 116 84 151 96 171 L86 174 C70 145 70 108 85 85Z" fill="#42251f"/>
            <path d="M155 85 C166 113 159 149 145 170 L155 174 C177 143 174 105 155 85Z" fill="#42251f"/>
          `
        : `
            <path d="M81 77 C83 38 153 33 160 77 L151 67 L139 72 L126 60 L112 72 L99 66 L89 84Z" fill="#30211d"/>
          `;

    return `
        <svg viewBox="0 0 240 280"
             xmlns="http://www.w3.org/2000/svg"
             role="img"
             aria-label="${female ? "کاراکتر دختر" : "کاراکتر پسر"} با استایل ${outfit.label}">

            <defs>
                <linearGradient id="characterBg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="${outfit.backdrop}" stop-opacity=".48"/>
                    <stop offset="1" stop-color="#E9BE91" stop-opacity=".08"/>
                </linearGradient>
                <linearGradient id="skinTone" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#F6D5B9"/>
                    <stop offset="1" stop-color="#D99F7E"/>
                </linearGradient>
            </defs>

            <circle cx="120" cy="135" r="104" fill="url(#characterBg)"/>
            <circle cx="120" cy="135" r="91"
                    fill="none" stroke="#F1D0A2"
                    stroke-opacity=".20" stroke-width="1"/>

            <path d="M42 224 C64 214 75 219 86 231"
                  fill="none" stroke="#e5b783" stroke-opacity=".4" stroke-width="1.5"/>
            <path d="M159 43 C174 35 184 36 194 44"
                  fill="none" stroke="#e5b783" stroke-opacity=".4" stroke-width="1.5"/>

            ${outfit.back}
            ${backHair}

            <path d="M108 125 L108 151 Q120 162 132 151 L132 125Z"
                  fill="url(#skinTone)"/>

            ${outfit.body}

            <path d="M86 80 C82 73 75 81 81 93 L89 99Z" fill="#e2ad8d"/>
            <path d="M154 80 C158 73 165 81 159 93 L151 99Z" fill="#e2ad8d"/>

            <ellipse cx="120" cy="84" rx="36" ry="43" fill="url(#skinTone)"/>

            <ellipse cx="107" cy="91" rx="3.5" ry="4.3" fill="#39251f"/>
            <ellipse cx="133" cy="91" rx="3.5" ry="4.3" fill="#39251f"/>

            <path d="M101 81 Q107 77 113 81"
                  fill="none" stroke="#744b3b" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M127 81 Q133 77 139 81"
                  fill="none" stroke="#744b3b" stroke-width="2.5" stroke-linecap="round"/>

            <path d="M120 91 L117 102 L121 103"
                  fill="none" stroke="#bf896c" stroke-width="1.6" stroke-linecap="round"/>
            <path d="M111 111 Q120 117 129 111"
                  fill="none" stroke="#985d4e" stroke-width="2" stroke-linecap="round"/>

            <circle cx="101" cy="103" r="5" fill="#dc8a78" opacity=".22"/>
            <circle cx="139" cy="103" r="5" fill="#dc8a78" opacity=".22"/>

            ${frontHair}
            ${outfit.accessory}

            <ellipse cx="120" cy="267" rx="57" ry="5"
                     fill="#160f0d" opacity=".19"/>
        </svg>
    `;
}


/* ==========================================
   به‌روزرسانی کاراکترها
========================================== */

function renderCharacter(elementId, gender, outfitKey) {
    const target = document.getElementById(elementId);
    if (!target) return;

    target.innerHTML = characterSvg(gender, outfitKey);
}

function updateCharacters() {
    const gender = invitationData.gender || "female";
    const outfit = invitationData.outfit || "casual";

    renderCharacter("inviteCharacter", gender, outfit);
    renderCharacter("outfitCharacter", gender, outfit);
    renderCharacter("finalCharacter", gender, outfit);
}

function setupGenderPreviews() {
    renderCharacter("genderFemaleArt", "female", "autumn");
    renderCharacter("genderMaleArt", "male", "autumn");
}


/* ==========================================
   برگ‌های پاییزی
========================================== */

function setupFallingLeaves() {
    const container = document.querySelector(".falling-leaves");
    if (!container) return;

    container.replaceChildren();

    const colors = [
        "#c77749",
        "#d99b5e",
        "#9f4938",
        "#b86a42",
        "#e3b579",
        "#875040"
    ];

    for (let i = 0; i < 24; i++) {
        const leaf = document.createElement("span");
        leaf.className = "leaf";
        leaf.setAttribute("aria-hidden", "true");

        leaf.style.left = `${Math.random() * 100}%`;

        leaf.style.setProperty(
            "--leaf-color",
            colors[Math.floor(Math.random() * colors.length)]
        );

        leaf.style.setProperty(
            "--duration",
            `${18 + Math.random() * 17}s`
        );

        leaf.style.setProperty(
            "--delay",
            `${-Math.random() * 35}s`
        );

        leaf.style.setProperty(
            "--drift",
            `${Math.round(Math.random() * 140 - 70)}px`
        );

        const size = 8 + Math.random() * 9;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size * 1.45}px`;
        leaf.style.opacity = `${0.28 + Math.random() * 0.4}`;

        container.appendChild(leaf);
    }
}


/* ==========================================
   نوار پیشرفت
========================================== */

const stepInformation = {
    welcome: {
        label: "شروع یک ماجرا",
        count: "خوش آمدی",
        progress: 0
    },
    gender: {
        label: "انتخاب کاراکتر",
        count: "۰۱ / ۰۷",
        progress: 14
    },
    invite: {
        label: "دعوت دوستانه",
        count: "۰۲ / ۰۷",
        progress: 28
    },
    outfit: {
        label: "انتخاب استایل",
        count: "۰۳ / ۰۷",
        progress: 42
    },
    place: {
        label: "انتخاب فضا",
        count: "۰۴ / ۰۷",
        progress: 57
    },
    mystery: {
        label: "یک راز کوچک",
        count: "۰۵ / ۰۷",
        progress: 71
    },
    gift: {
        label: "انتخاب یادگاری",
        count: "۰۶ / ۰۷",
        progress: 85
    },
    info: {
        label: "تکمیل دعوت",
        count: "۰۷ / ۰۷",
        progress: 96
    },
    final: {
        label: "پیش‌نمایش دعوت",
        count: "✓",
        progress: 100
    }
};

function updateProgress(screenId) {
    const info = stepInformation[screenId] || stepInformation.welcome;

    const label = document.getElementById("stepLabel");
    const count = document.getElementById("stepCount");
    const bar = document.getElementById("progressBar");

    if (label) label.textContent = info.label;
    if (count) count.textContent = info.count;
    if (bar) bar.style.width = `${info.progress}%`;
}


/* ==========================================
   حرکت بین صفحه‌ها
========================================== */

function nextStep(screenId) {
    const target = document.getElementById(screenId);
    if (!target) return;

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    target.classList.add("active");
    updateProgress(screenId);

    if (screenId === "outfit") {
        updateCharacters();
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   انتخاب جنسیت
========================================== */

function selectGender(gender) {
    if (gender !== "female" && gender !== "male") return;

    invitationData.gender = gender;

    document.querySelectorAll(".gender-card").forEach(card => {
        card.classList.remove("selected");
    });

    const selectedCard = document.querySelector(
        gender === "female"
            ? ".gender-card:nth-child(1)"
            : ".gender-card:nth-child(2)"
    );

    if (selectedCard) selectedCard.classList.add("selected");

    updateCharacters();
    nextStep("invite");
}


/* ==========================================
   انتخاب لباس
========================================== */

function selectOutfit(outfitKey) {
    if (!outfitLooks[outfitKey]) return;

    invitationData.outfit = outfitKey;

    document.querySelectorAll(".outfit-option").forEach(button => {
        button.classList.toggle(
            "selected",
            button.dataset.outfit === outfitKey
        );
    });

    const name = document.getElementById("lookName");
    const dot = document.getElementById("lookDot");
    const nextButton = document.getElementById("outfitNext");

    if (name) name.textContent = outfitLooks[outfitKey].label;
    if (dot) dot.style.background = outfitLooks[outfitKey].color;
    if (nextButton) nextButton.disabled = false;

    updateCharacters();
}


/* ==========================================
   انتخاب مکان و هدیه
========================================== */

function selectPlace(place) {
    const allowedPlaces = [
        "کافه",
        "رستوران",
        "پارک",
        "مکان گردشگری"
    ];

    if (!allowedPlaces.includes(place)) return;

    invitationData.place = place;
    nextStep("mystery");
}

function selectGift(gift) {
    if (gift !== "گل" && gift !== "شکلات") return;

    invitationData.gift = gift;
    nextStep("info");
}


/* ==========================================
   دکمه فراری «نه»
========================================== */

function setupNoButton() {
    const noButton = document.getElementById("noButton");
    const area = document.querySelector(".answer-area");

    if (!noButton || !area) return;

    function moveButton() {
        if (!document.getElementById("invite").classList.contains("active")) {
            return;
        }

        const maxX = Math.max(0, area.clientWidth - noButton.offsetWidth);
        const maxY = Math.max(0, area.clientHeight - noButton.offsetHeight);

        noButton.style.left = `${Math.random() * maxX}px`;
        noButton.style.top = `${Math.random() * maxY}px`;
    }

    noButton.addEventListener("mouseenter", moveButton);
    noButton.addEventListener("click", moveButton);

    noButton.addEventListener("touchstart", event => {
        event.preventDefault();
        moveButton();
    }, { passive: false });
}


/* ==========================================
   ثبت پیش‌نمایش نهایی
========================================== */

function normalizeDigits(value) {
    const persian = "۰۱۲۳۴۵۶۷۸۹";
    const arabic = "٠١٢٣٤٥٦٧٨٩";

    return value
        .replace(/[۰-۹]/g, digit => String(persian.indexOf(digit)))
        .replace(/[٠-٩]/g, digit => String(arabic.indexOf(digit)));
}

function addFinalDetail(label, value) {
    const container = document.getElementById("finalDetails");
    if (!container) return;

    const item = document.createElement("div");
    item.className = "final-detail";

    const small = document.createElement("small");
    small.textContent = label;

    const strong = document.createElement("span");
    strong.textContent = value;

    item.append(small, strong);
    container.appendChild(item);
}

function finishInvitation(event) {
    if (event) event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneRaw = document.getElementById("phone").value.trim();

    const phone = normalizeDigits(phoneRaw).replace(/\D/g, "");

    if (!firstName || !lastName || !phoneRaw) {
        alert("لطفاً هر سه فیلد را تکمیل کن.");
        return;
    }

    if (phone.length < 10 || phone.length > 15) {
        alert("شماره موبایل را بررسی کن.");
        return;
    }

    if (
        !invitationData.gender ||
        !invitationData.outfit ||
        !invitationData.place ||
        !invitationData.gift
    ) {
        alert("لطفاً مراحل دعوت را کامل کن.");
        return;
    }

    const title = document.getElementById("finalMessage");

    if (title) {
        title.textContent =
            `پیش‌نمایش دعوتنامه برای ${firstName} ${lastName} آماده شد.`;
    }

    const details = document.getElementById("finalDetails");
    if (details) details.replaceChildren();

    addFinalDetail(
        "کاراکتر",
        invitationData.gender === "female" ? "دختر" : "پسر"
    );

    addFinalDetail(
        "استایل",
        outfitLooks[invitationData.outfit].label
    );

    addFinalDetail("فضای قرار", invitationData.place);
    addFinalDetail("هدیه", invitationData.gift);

    /*
      این نسخه هنوز سرویس ارسال اطلاعات ندارد.
      نام و شماره به هیچ سروری ارسال نمی‌شوند.
    */

    nextStep("final");
}


/* ==========================================
   شروع دوباره
========================================== */

function restartInvitation() {
    invitationData.gender = null;
    invitationData.outfit = null;
    invitationData.place = null;
    invitationData.gift = null;

    const form = document.querySelector(".contact-form");
    if (form) form.reset();

    document.querySelectorAll(".gender-card, .outfit-option").forEach(item => {
        item.classList.remove("selected");
    });

    const nextButton = document.getElementById("outfitNext");
    if (nextButton) nextButton.disabled = true;

    const name = document.getElementById("lookName");
    if (name) name.textContent = "استایلت رو انتخاب کن";

    const details = document.getElementById("finalDetails");
    if (details) details.replaceChildren();

    nextStep("welcome");
}


/* ==========================================
   راه‌اندازی اولیه
========================================== */

setupGenderPreviews();
setupFallingLeaves();
setupNoButton();
updateProgress("welcome");
