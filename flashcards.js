// ============================================
// FLASHCARDS - Andreeas Diplom (A2.1 · Lecția 2)
// Claudia Toth · 32 carduri Schule + Party + Adjective + Conectori
// REGULĂ: NICIODATĂ ghilimele interne — folosește CAPS pentru emfază
// ============================================

const flashcardsData = [
    // === Schule + Studium (8) ===
    { de: "die Prüfung · die Prüfungen", ro: "examenul · examenele (Prüfung = examen oral SAU scris, formal)", audio: "audio/letters/pruefung.wav" },
    { de: "die Klausur · die Klausuren", ro: "lucrarea · lucrările (Klausur = test scris la facultate/liceu)", audio: "audio/letters/klausur.wav" },
    { de: "das Zeugnis · die Zeugnisse", ro: "diploma · diplomele (foaia matricolă cu note)", audio: "audio/letters/zeugnis.wav" },
    { de: "der Abschluss · die Abschlüsse", ro: "absolvirea · absolvirile (diploma finală)", audio: "audio/letters/abschluss.wav" },
    { de: "die Note · die Noten", ro: "nota · notele (1=sehr gut, 6=ungenügend în Germania)", audio: "audio/letters/note.wav" },
    { de: "der Bachelor", ro: "diploma de licență (BA) — împrumut englez", audio: "audio/letters/bachelor.wav" },
    { de: "die Universität · die Universitäten", ro: "universitatea · universitățile", audio: "audio/letters/universitaet.wav" },
    { de: "die Pädagogik", ro: "pedagogia (substantiv nenumărabil — fără plural)", audio: "audio/letters/paedagogik.wav" },

    // === Party + festivități (6) ===
    { de: "der Geburtstag · die Geburtstage", ro: "ziua de naștere · zilele de naștere", audio: "audio/letters/geburtstag.wav" },
    { de: "die Party · die Partys", ro: "petrecerea · petrecerile (împrumut englez)", audio: "audio/letters/party.wav" },
    { de: "die Torte · die Torten", ro: "tortul · torturile", audio: "audio/letters/torte.wav" },
    { de: "das Getränk · die Getränke", ro: "băutura · băuturile", audio: "audio/letters/getraenk.wav" },
    { de: "der Gast · die Gäste", ro: "oaspetele · oaspeții (Umlaut + -e la plural)", audio: "audio/letters/gast.wav" },
    { de: "feiern", ro: "a sărbători (verb regulat)", audio: "audio/letters/feiern.wav" },

    // === Adjective stări emoționale (10) ===
    { de: "glücklich", ro: "fericit(ă)", audio: "audio/letters/gluecklich.wav" },
    { de: "traurig", ro: "trist(ă)", audio: "audio/letters/traurig.wav" },
    { de: "stolz (auf + Akk)", ro: "mândru(ă) de (auf + acuzativ — stolz auf seinen Sohn)", audio: "audio/letters/stolz.wav" },
    { de: "müde", ro: "obosit(ă)", audio: "audio/letters/muede.wav" },
    { de: "nervös", ro: "nervos(oasă) / agitat(ă)", audio: "audio/letters/nervoes.wav" },
    { de: "gestresst", ro: "stresat(ă)", audio: "audio/letters/gestresst.wav" },
    { de: "zufrieden", ro: "mulțumit(ă) (mit + dativ — zufrieden mit der Arbeit)", audio: "audio/letters/zufrieden.wav" },
    { de: "überrascht", ro: "surprins(ă) (von + dativ)", audio: "audio/letters/ueberrascht.wav" },
    { de: "enttäuscht", ro: "dezamăgit(ă) (von + dativ)", audio: "audio/letters/enttaeuscht.wav" },
    { de: "peinlich", ro: "jenant / penibil (impersonal: das ist peinlich)", audio: "audio/letters/peinlich.wav" },

    // === Verbe + Conectori (8) ===
    { de: "gratulieren (+ Dat)", ro: "a felicita (cu DATIV: Ich gratuliere DIR — îți zicem felicitări)", audio: "audio/letters/gratulieren.wav" },
    { de: "bestehen / bestanden", ro: "a promova / promovat (Perfekt cu haben, TARE: bestehen-bestand-bestanden)", audio: "audio/letters/bestehen.wav" },
    { de: "einladen / eingeladen", ro: "a invita / invitat (TRENNBAR + TARE: einladen-lud ein-eingeladen)", audio: "audio/letters/einladen.wav" },
    { de: "mitbringen / mitgebracht", ro: "a aduce cu sine / adus (TRENNBAR + TARE: mitbringen-brachte mit-mitgebracht)", audio: "audio/letters/mitbringen.wav" },
    { de: "weil", ro: "pentru că (Nebensatz — verbul la SFÂRȘIT)", audio: "audio/letters/weil.wav" },
    { de: "dass", ro: "că (Nebensatz pentru indirekte Rede — verbul la SFÂRȘIT)", audio: "audio/letters/dass.wav" },
    { de: "denn", ro: "fiindcă (sinonim cu weil DAR sintaxă diferită — verb pe poziția 2!)", audio: "audio/letters/denn.wav" },
    { de: "deswegen", ro: "de aceea / din această cauză (Hauptsatz cu inversiune)", audio: "audio/letters/deswegen.wav" }
];

let currentCard = 0;
let isFlipped = false;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} flashcards cu pronunție.</strong><br>
            Apasă pe card pentru a vedea traducerea · butonul 🔊 pentru pronunție · navigare cu săgețile.
        </div>
        <div class="flashcard-counter">
            Card <span id="card-num">1</span> / ${flashcardsData.length}
        </div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playCardAudio(event)" title="Ascultă">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="card-de"></div>
                <div class="ro" id="card-ro"></div>
            </div>
            <div class="flashcard-hint" id="card-hint">Click pentru traducere</div>
        </div>
        <div class="flashcard-nav">
            <button class="btn btn-prev" onclick="prevCard()">← Anterior</button>
            <button class="btn btn-next" onclick="nextCard()">Următor →</button>
        </div>
    `;
    updateCard();
}

function updateCard() {
    const card = flashcardsData[currentCard];
    document.getElementById('card-de').textContent = card.de;
    document.getElementById('card-ro').textContent = isFlipped ? card.ro : '';
    document.getElementById('card-hint').textContent = isFlipped ? 'Click pentru DE' : 'Click pentru RO';
    document.getElementById('card-num').textContent = currentCard + 1;
}

function flipCard() {
    isFlipped = !isFlipped;
    updateCard();
}

function nextCard() {
    if (currentCard < flashcardsData.length - 1) {
        currentCard++;
        isFlipped = false;
        updateCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        isFlipped = false;
        updateCard();
    }
}

function playCardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCard];
    if (card.audio) {
        const audio = new Audio(card.audio);
        audio.play().catch(err => console.log('Audio nu poate fi redat:', err));
    }
}

document.addEventListener('DOMContentLoaded', buildFlashcards);
