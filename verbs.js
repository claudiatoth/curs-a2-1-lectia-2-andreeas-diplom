// ============================================
// VERB-KONJUGATION - Andreeas Diplom (A2.1 · Lecția 2)
// 8 verbe PONS-verified: gratulieren · bestehen · einladen · mitbringen · vorbeikommen · stattfinden · sich freuen · erzählen
// + recap Modalverbe la Präteritum (sollen/wollen/dürfen/können/müssen) — vezi Teorie subsecțiunea 2
// ============================================

const verbsData = [
    {
        inf: 'gratulieren', ro: 'a felicita (+ Dat)', typ: 'regulat', aux: 'haben', part: 'gratuliert',
        praes: [
            ['ich','gratuliere','felicit'],['du','gratulierst','feliciți'],['er/sie/es','gratuliert','felicită'],
            ['wir','gratulieren','felicităm'],['ihr','gratuliert','felicitați'],['sie/Sie','gratulieren','felicită / felicitați']
        ],
        praet: [
            ['ich','gratulierte','felicitam'],['du','gratuliertest','felicitai'],['er/sie/es','gratulierte','felicita'],
            ['wir','gratulierten','felicitam (noi)'],['ihr','gratuliertet','felicitați'],['sie/Sie','gratulierten','felicitau']
        ],
        perf: [
            ['ich','habe gratuliert','am felicitat'],['du','hast gratuliert','ai felicitat'],['er/sie/es','hat gratuliert','a felicitat'],
            ['wir','haben gratuliert','am felicitat'],['ihr','habt gratuliert','ați felicitat'],['sie/Sie','haben gratuliert','au felicitat']
        ],
        note: '🚨 gratulieren se folosește cu DATIV: Ich gratuliere DIR (te felicit) / Wir gratulieren IHR zum Bachelor (o felicităm pentru diploma de licență). Cuvântul „zum / zur" introduce obiectul felicitării: zum Geburtstag, zur Hochzeit, zum Abschluss.'
    },
    {
        inf: 'bestehen', ro: 'a promova / a trece (examen)', typ: 'tare / neregulat', aux: 'haben', part: 'bestanden',
        praes: [
            ['ich','bestehe','promovez'],['du','bestehst','promovezi'],['er/sie/es','besteht','promovează'],
            ['wir','bestehen','promovăm'],['ihr','besteht','promovați'],['sie/Sie','bestehen','promovează / promovați']
        ],
        praet: [
            ['ich','bestand','promovam (eu)'],['du','bestandest','promovai'],['er/sie/es','bestand','promova'],
            ['wir','bestanden','promovam (noi)'],['ihr','bestandet','promovați'],['sie/Sie','bestanden','promovau']
        ],
        perf: [
            ['ich','habe bestanden','am promovat'],['du','hast bestanden','ai promovat'],['er/sie/es','hat bestanden','a promovat'],
            ['wir','haben bestanden','am promovat'],['ihr','habt bestanden','ați promovat'],['sie/Sie','haben bestanden','au promovat']
        ],
        note: '🚨 Verb TARE: bestehen → bestand → bestanden. Auxiliar HABEN (NU sein, deși pare „mișcare"!). Andreea hat die Prüfung bestanden = Andreea a promovat examenul. Plus „bestehen aus + Dat" = a fi compus din (Das Buch besteht aus 3 Kapiteln).'
    },
    {
        inf: 'einladen', ro: 'a invita', typ: 'tare / neregulat / TRENNBAR', aux: 'haben', part: 'eingeladen',
        praes: [
            ['ich','lade ein','invit'],['du','lädst ein','inviți (Umlaut!)'],['er/sie/es','lädt ein','invită (Umlaut!)'],
            ['wir','laden ein','invităm'],['ihr','ladet ein','invitați'],['sie/Sie','laden ein','invită / invitați']
        ],
        praet: [
            ['ich','lud ein','invitam'],['du','ludst ein','invitai'],['er/sie/es','lud ein','invita'],
            ['wir','luden ein','invitam (noi)'],['ihr','ludet ein','invitați'],['sie/Sie','luden ein','invitau']
        ],
        perf: [
            ['ich','habe eingeladen','am invitat'],['du','hast eingeladen','ai invitat'],['er/sie/es','hat eingeladen','a invitat'],
            ['wir','haben eingeladen','am invitat'],['ihr','habt eingeladen','ați invitat'],['sie/Sie','haben eingeladen','au invitat']
        ],
        note: '🚨 TRENNBAR + TARE + Umlaut la du/er! ich lade EIN (separat) → ich habe eingeladen (un singur cuvânt în Perfekt, ge- în mijloc). Cu Akkusativ: Ich lade DICH ein (te invit pe tine).'
    },
    {
        inf: 'mitbringen', ro: 'a aduce cu sine', typ: 'tare / neregulat / TRENNBAR', aux: 'haben', part: 'mitgebracht',
        praes: [
            ['ich','bringe mit','aduc cu mine'],['du','bringst mit','aduci cu tine'],['er/sie/es','bringt mit','aduce cu sine'],
            ['wir','bringen mit','aducem'],['ihr','bringt mit','aduceți'],['sie/Sie','bringen mit','aduc / aduceți']
        ],
        praet: [
            ['ich','brachte mit','aduceam cu mine'],['du','brachtest mit','aduceai'],['er/sie/es','brachte mit','aducea'],
            ['wir','brachten mit','aduceam (noi)'],['ihr','brachtet mit','aduceați'],['sie/Sie','brachten mit','aduceau']
        ],
        perf: [
            ['ich','habe mitgebracht','am adus'],['du','hast mitgebracht','ai adus'],['er/sie/es','hat mitgebracht','a adus'],
            ['wir','haben mitgebracht','am adus'],['ihr','habt mitgebracht','ați adus'],['sie/Sie','haben mitgebracht','au adus']
        ],
        note: '🚨 TRENNBAR + Mischverb (amestec tare+slab). Particip: mit + ge + bracht. Annette bringt eine Torte MIT (separat în Präsens) → Annette hat eine Torte MITGEBRACHT.'
    },
    {
        inf: 'vorbeikommen', ro: 'a trece pe la (cineva)', typ: 'tare / neregulat / TRENNBAR', aux: 'sein', part: 'vorbeigekommen',
        praes: [
            ['ich','komme vorbei','trec pe la'],['du','kommst vorbei','treci'],['er/sie/es','kommt vorbei','trece'],
            ['wir','kommen vorbei','trecem'],['ihr','kommt vorbei','treceți'],['sie/Sie','kommen vorbei','trec / treceți']
        ],
        praet: [
            ['ich','kam vorbei','treceam'],['du','kamst vorbei','treceai'],['er/sie/es','kam vorbei','trecea'],
            ['wir','kamen vorbei','treceam (noi)'],['ihr','kamt vorbei','treceați'],['sie/Sie','kamen vorbei','treceau']
        ],
        perf: [
            ['ich','bin vorbeigekommen','am trecut'],['du','bist vorbeigekommen','ai trecut'],['er/sie/es','ist vorbeigekommen','a trecut'],
            ['wir','sind vorbeigekommen','am trecut'],['ihr','seid vorbeigekommen','ați trecut'],['sie/Sie','sind vorbeigekommen','au trecut']
        ],
        note: '🚨 Perfekt cu SEIN (mișcare în spațiu). Particip: vorbei + ge + kommen. Carolina kommt morgen vorbei = Carolina trece mâine pe la (mine). Folosit des în germana colocvială pentru vizite spontane.'
    },
    {
        inf: 'stattfinden', ro: 'a avea loc / a se desfășura', typ: 'tare / neregulat / TRENNBAR', aux: 'haben', part: 'stattgefunden',
        praes: [
            ['es','findet statt','are loc'],['sie','finden statt','au loc (Plural)']
        ],
        praet: [
            ['es','fand statt','avea loc'],['sie','fanden statt','aveau loc']
        ],
        perf: [
            ['es','hat stattgefunden','a avut loc'],['sie','haben stattgefunden','au avut loc']
        ],
        note: '🚨 Verb IMPERSONAL (folosit doar la persoana 3 — „es" sau plural). Particip: statt + ge + funden. Die Party findet am Samstag statt = Party-ul are loc sâmbătă. Folosit pentru evenimente: Konzert, Hochzeit, Sitzung.'
    },
    {
        inf: 'sich freuen', ro: 'a se bucura (auf/über + Akk)', typ: 'regulat / reflexiv', aux: 'haben', part: 'gefreut',
        praes: [
            ['ich','freue mich','mă bucur'],['du','freust dich','te bucuri'],['er/sie/es','freut sich','se bucură'],
            ['wir','freuen uns','ne bucurăm'],['ihr','freut euch','vă bucurați'],['sie/Sie','freuen sich','se bucură / vă bucurați']
        ],
        praet: [
            ['ich','freute mich','mă bucuram'],['du','freutest dich','te bucurai'],['er/sie/es','freute sich','se bucura'],
            ['wir','freuten uns','ne bucuram'],['ihr','freutet euch','vă bucurați'],['sie/Sie','freuten sich','se bucurau']
        ],
        perf: [
            ['ich','habe mich gefreut','m-am bucurat'],['du','hast dich gefreut','te-ai bucurat'],['er/sie/es','hat sich gefreut','s-a bucurat'],
            ['wir','haben uns gefreut','ne-am bucurat'],['ihr','habt euch gefreut','v-ați bucurat'],['sie/Sie','haben sich gefreut','s-au bucurat']
        ],
        note: '🚨 REFLEXIV — pronumele reflexiv (mich/dich/sich) merge cu fiecare persoană. 2 prepoziții: „freuen AUF + Akk" (a se bucura PENTRU ceva în viitor — Ich freue mich auf die Party) vs „freuen ÜBER + Akk" (a se bucura DE ceva deja întâmplat — Ich freue mich über das Geschenk).'
    },
    {
        inf: 'erzählen', ro: 'a povesti (+ dass)', typ: 'regulat', aux: 'haben', part: 'erzählt',
        praes: [
            ['ich','erzähle','povestesc'],['du','erzählst','povestești'],['er/sie/es','erzählt','povestește'],
            ['wir','erzählen','povestim'],['ihr','erzählt','povestiți'],['sie/Sie','erzählen','povestesc / povestiți']
        ],
        praet: [
            ['ich','erzählte','povesteam'],['du','erzähltest','povesteai'],['er/sie/es','erzählte','povestea'],
            ['wir','erzählten','povesteam (noi)'],['ihr','erzähltet','povesteați'],['sie/Sie','erzählten','povesteau']
        ],
        perf: [
            ['ich','habe erzählt','am povestit'],['du','hast erzählt','ai povestit'],['er/sie/es','hat erzählt','a povestit'],
            ['wir','haben erzählt','am povestit'],['ihr','habt erzählt','ați povestit'],['sie/Sie','haben erzählt','au povestit']
        ],
        note: '🚨 Verb regulat cu prefix NESEPARABIL „er-" (nu se separă!). NU ge- la Perfekt (er- e neaccentuat). Verb-cheie pentru Indirekte Rede: Andreea erzählt, DASS sie zur Party kommt. Sinonime: sagen, berichten, meinen.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    // Verbe impersonale (stattfinden, regnen, etc.) au doar 1-2 forme — folosește [0] dacă [2] lipsește
    const exampleRow = v.perf[2] || v.perf[0];
    const exSubj = exampleRow[0] || 'er';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + exSubj + ' <strong>' + exampleRow[1] + '</strong> · <em style="color:#6b7280;">' + exampleRow[2] + '</em><br>' +
        '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (' + (v.aux === 'sein' ? 'ich bin, du bist, er ist...' : 'ich habe, du hast, er hat...') + ') + <strong>' + v.part + '</strong>.</small></p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe-cheie ale lecției</strong> — Präsens + Präteritum (complet) · Perfekt (pe scurt).<br>' +
        'Click pe un verb ca să-i vezi conjugarea. Modalverbele la Präteritum (musste, wollte, durfte, konnte, sollte) sunt în secțiunea „Teorie 2".' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Verbele lecției 2 te ajută să POVESTEȘTI! gratulieren + Dat, bestehen (TARE!), einladen + Akk, mitbringen, vorbeikommen (cu SEIN!), stattfinden (impersonal), sich freuen (reflexiv) și erzählen + dass. Toate apar des în context social. Memorează-le bine pentru lecțiile A2 următoare! 🦋"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : (v.typ.indexOf('aux') === 0 ? '#7c3aed' : '#047857');
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect / timp scris)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="andreea-note" style="margin-top:6px;"><img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar"><div class="andreea-note-content"><div class="speaker">Notă PONS:</div><div class="text">' + v.note + '</div></div></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

// Regula 10: toggleVerb cu .active (NU .open) + rotește săgeata
function toggleVerb(i) {
    const content = document.getElementById('verb-' + i);
    if (!content) return;
    content.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

// Regula 9: apel DIRECT (NU DOMContentLoaded)
buildVerbs();
