// ============================================
// EXERCIȚII - Andreeas Diplom (A2.1 · Lecția 2)
// Claudia Toth · 5 exerciții cu rezolvări complete
// ============================================

function normalizeAnswer(str) {
    return (str || '').toString().toLowerCase().trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

// Acceptă fragment SAU propoziție completă (regula 4 AGENTS-README)
function answerMatches(userInput, acceptList) {
    const user = normalizeAnswer(userInput);
    return acceptList.some(target => {
        const t = normalizeAnswer(target);
        return user === t || user.includes(t) || t.includes(user);
    });
}

// ============================================
// EX 1: Adevărat sau Fals — povestea Andreeei (10 itemi)
// ============================================
const ex1Data = [
    { id: 'a', text: 'Andreea studiază Pädagogik la Universitatea Potsdam.', correct: 'richtig' },
    { id: 'b', text: 'Andreea termină Bachelor-ul după 5 ani.', correct: 'falsch', expl: 'După 3 ani (Bachelor durează 3 ani în Germania).' },
    { id: 'c', text: 'Mihai aduce un tort la ceremonie.', correct: 'falsch', expl: 'Annette aduce tortul, nu Mihai.' },
    { id: 'd', text: 'Annette este profesoară de germană la Berlin.', correct: 'richtig' },
    { id: 'e', text: 'Andreea spune că vrea să muncească în Germania.', correct: 'richtig' },
    { id: 'f', text: 'Florian poate veni la party fără probleme.', correct: 'falsch', expl: 'Florian trebuie să muncească (weil er arbeiten muss).' },
    { id: 'g', text: 'Acar e obosit pentru că s-a sculat la șase dimineața.', correct: 'richtig' },
    { id: 'h', text: 'Carolina e mândră pentru că a promovat toate examenele.', correct: 'richtig' },
    { id: 'i', text: 'Părinții Andreeei sunt din Germania.', correct: 'falsch', expl: 'Părinții ei sunt din România.' },
    { id: 'j', text: 'Andreea învață germană pentru că vrea să muncească în Germania.', correct: 'richtig' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📝 Citește povestea Andreeei și bifează adevărat (richtig) sau fals (falsch).</strong>
    </div>`;
    ex1Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:8px;">${it.text}</p>
                <label style="margin-right:14px;"><input type="radio" name="ex1-${it.id}" value="richtig"> ✅ Richtig</label>
                <label><input type="radio" name="ex1-${it.id}" value="falsch"> ❌ Falsch</label>
            </div>
            <div class="feedback" id="ex1-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        if (!sel) {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct === 'richtig' ? '✅ Richtig' : '❌ Falsch'}${it.expl ? ' — ' + it.expl : ''}`;
            return;
        }
        if (sel.value === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig!${it.expl ? ' — ' + it.expl : ''}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct === 'richtig' ? '✅ Richtig' : '❌ Falsch'}${it.expl ? ' — ' + it.expl : ''}`;
        }
    });
    return { correct, total: ex1Data.length };
}

function resetEx1() {
    buildEx1();
    const s = document.getElementById('score-1');
    if (s) s.textContent = '';
}

// ============================================
// EX 2: Propoziții cu WEIL — transformă 2 fraze în 1 (8 itemi)
// ============================================
const ex2Data = [
    {
        id: 'a',
        prompt: 'Andreea ist glücklich. Sie hat ihr Bachelor.',
        translation: 'Andreea e fericită. Are diploma de Bachelor.',
        correct: 'Andreea ist glücklich, weil sie ihr Bachelor hat.',
        accept: ['andreea ist glucklich weil sie ihr bachelor hat', 'weil sie ihr bachelor hat']
    },
    {
        id: 'b',
        prompt: 'Mihai bringt eine Torte. Andreea hat ihren Abschluss gemacht.',
        translation: 'Mihai aduce un tort. Andreea și-a luat diploma.',
        correct: 'Mihai bringt eine Torte, weil Andreea ihren Abschluss gemacht hat.',
        accept: ['mihai bringt eine torte weil andreea ihren abschluss gemacht hat', 'weil andreea ihren abschluss gemacht hat']
    },
    {
        id: 'c',
        prompt: 'Florian kann nicht kommen. Er muss heute arbeiten.',
        translation: 'Florian nu poate veni. Trebuie să muncească azi.',
        correct: 'Florian kann nicht kommen, weil er heute arbeiten muss.',
        accept: ['florian kann nicht kommen weil er heute arbeiten muss', 'weil er heute arbeiten muss']
    },
    {
        id: 'd',
        prompt: 'Andreea ist müde. Sie hat viel gelernt.',
        translation: 'Andreea e obosită. A învățat mult.',
        correct: 'Andreea ist müde, weil sie viel gelernt hat.',
        accept: ['andreea ist mude weil sie viel gelernt hat', 'weil sie viel gelernt hat']
    },
    {
        id: 'e',
        prompt: 'Wir gehen früh nach Hause. Der Bus fährt gleich ab.',
        translation: 'Mergem devreme acasă. Autobuzul pleacă imediat.',
        correct: 'Wir gehen früh nach Hause, weil der Bus gleich abfährt.',
        accept: ['wir gehen fruh nach hause weil der bus gleich abfahrt', 'weil der bus gleich abfahrt']
    },
    {
        id: 'f',
        prompt: 'Annette ist stolz. Andreea hat alle Prüfungen bestanden.',
        translation: 'Annette e mândră. Andreea a promovat toate examenele.',
        correct: 'Annette ist stolz, weil Andreea alle Prüfungen bestanden hat.',
        accept: ['annette ist stolz weil andreea alle prufungen bestanden hat', 'weil andreea alle prufungen bestanden hat']
    },
    {
        id: 'g',
        prompt: 'Carolina lernt Deutsch. Sie möchte in Berlin arbeiten.',
        translation: 'Carolina învață germană. Vrea să muncească la Berlin.',
        correct: 'Carolina lernt Deutsch, weil sie in Berlin arbeiten möchte.',
        accept: ['carolina lernt deutsch weil sie in berlin arbeiten mochte', 'weil sie in berlin arbeiten mochte']
    },
    {
        id: 'h',
        prompt: 'Acar ist müde. Er ist um sechs aufgestanden.',
        translation: 'Acar e obosit. S-a sculat la șase.',
        correct: 'Acar ist müde, weil er um sechs aufgestanden ist.',
        accept: ['acar ist mude weil er um sechs aufgestanden ist', 'weil er um sechs aufgestanden ist']
    }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🔗 Transformă cele 2 propoziții într-una singură cu „weil".</strong><br>
        <em>Ține minte:</em> virgulă ÎNAINTE de weil + verbul la SFÂRȘITUL propoziției subordonate.
    </div>`;
    ex2Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.translation}</em></p>
                <input type="text" id="ex2-${it.id}" placeholder="Scrie propoziția completă cu weil...">
            </div>
            <div class="feedback" id="ex2-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const inp = document.getElementById(`ex2-${it.id}`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex2Data.length };
}

function resetEx2() {
    buildEx2();
    const s = document.getElementById('score-2');
    if (s) s.textContent = '';
}

// ============================================
// EX 3: Vorbire indirectă cu DASS (8 itemi)
// ============================================
const ex3Data = [
    {
        id: 'a',
        prompt: 'Andreea: „Ich komme zur Party."',
        translation: 'Andreea: „Eu vin la party."',
        correct: 'Andreea sagt, dass sie zur Party kommt.',
        accept: ['andreea sagt dass sie zur party kommt', 'dass sie zur party kommt']
    },
    {
        id: 'b',
        prompt: 'Mihai: „Ich bringe eine Torte mit."',
        translation: 'Mihai: „Eu aduc un tort."',
        correct: 'Mihai sagt, dass er eine Torte mitbringt.',
        accept: ['mihai sagt dass er eine torte mitbringt', 'dass er eine torte mitbringt']
    },
    {
        id: 'c',
        prompt: 'Annette: „Ich bin sehr stolz auf Andreea."',
        translation: 'Annette: „Sunt foarte mândră de Andreea."',
        correct: 'Annette sagt, dass sie sehr stolz auf Andreea ist.',
        accept: ['annette sagt dass sie sehr stolz auf andreea ist', 'dass sie sehr stolz auf andreea ist']
    },
    {
        id: 'd',
        prompt: 'Carolina: „Ich habe viele Fotos gemacht."',
        translation: 'Carolina: „Am făcut multe poze." (Perfekt)',
        correct: 'Carolina sagt, dass sie viele Fotos gemacht hat.',
        accept: ['carolina sagt dass sie viele fotos gemacht hat', 'dass sie viele fotos gemacht hat']
    },
    {
        id: 'e',
        prompt: 'Florian: „Ich kann nicht kommen."',
        translation: 'Florian: „Nu pot veni." (cu modal)',
        correct: 'Florian sagt, dass er nicht kommen kann.',
        accept: ['florian sagt dass er nicht kommen kann', 'dass er nicht kommen kann']
    },
    {
        id: 'f',
        prompt: 'Acar: „Ich habe gestern bis spät gearbeitet."',
        translation: 'Acar: „Ieri am lucrat până târziu." (Perfekt)',
        correct: 'Acar sagt, dass er gestern bis spät gearbeitet hat.',
        accept: ['acar sagt dass er gestern bis spat gearbeitet hat', 'dass er gestern bis spat gearbeitet hat']
    },
    {
        id: 'g',
        prompt: 'Andreea: „Ich lade alle Freunde ein."',
        translation: 'Andreea: „Invit toți prietenii." (verb separabil)',
        correct: 'Andreea sagt, dass sie alle Freunde einlädt.',
        accept: ['andreea sagt dass sie alle freunde einladt', 'dass sie alle freunde einladt']
    },
    {
        id: 'h',
        prompt: 'Mihai: „Die Party findet am Samstag statt."',
        translation: 'Mihai: „Party-ul are loc sâmbătă." (verb separabil)',
        correct: 'Mihai sagt, dass die Party am Samstag stattfindet.',
        accept: ['mihai sagt dass die party am samstag stattfindet', 'dass die party am samstag stattfindet']
    }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>💬 Transformă vorbirea directă în vorbire indirectă cu „dass".</strong><br>
        <em>Ține minte:</em> schimbă pronumele (ich → er/sie) + verbul la SFÂRȘIT.
    </div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>${it.prompt}</strong><br><em style="color:#6b7280; font-size:0.9rem;">${it.translation}</em></p>
                <input type="text" id="ex3-${it.id}" placeholder="Transformă cu dass...">
            </div>
            <div class="feedback" id="ex3-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

function resetEx3() {
    buildEx3();
    const s = document.getElementById('score-3');
    if (s) s.textContent = '';
}

// ============================================
// EX 4: Modalverbe la Präteritum (10 itemi)
// ============================================
const ex4Data = [
    { id: 'a', sentence: 'Als Kind ____ ich immer Lehrerin werden. (wollen)', translation: 'Când eram copil, voiam să devin profesoară.', correct: 'wollte', accept: ['wollte'] },
    { id: 'b', sentence: 'Wir ____ für die Prüfung viel lernen. (müssen)', translation: 'Trebuia să învățăm mult pentru examen.', correct: 'mussten', accept: ['mussten'] },
    { id: 'c', sentence: 'Andreea ____ als Schülerin sehr gut Englisch sprechen. (können)', translation: 'Andreea știa să vorbească foarte bine engleza ca elevă.', correct: 'konnte', accept: ['konnte'] },
    { id: 'd', sentence: 'Du ____ gestern bei der Prüfung kein Wörterbuch benutzen. (dürfen)', translation: 'Ieri nu aveai voie să folosești dicționar la examen.', correct: 'durftest', accept: ['durftest'] },
    { id: 'e', sentence: 'Mihai ____ vor 5 Jahren in die Schweiz auswandern. (sollen)', translation: 'Mihai trebuia să emigreze în Elveția acum 5 ani (cineva i-a spus).', correct: 'sollte', accept: ['sollte'] },
    { id: 'f', sentence: 'Ihr ____ bei der mündlichen Prüfung sehr nervös sein. (müssen)', translation: 'Trebuie să fi fost foarte nervoși la examenul oral.', correct: 'musstet', accept: ['musstet'] },
    { id: 'g', sentence: 'Als Jugendlicher ____ ich nicht oft ins Kino gehen. (dürfen)', translation: 'Ca tânăr, nu aveam voie să merg des la cinema.', correct: 'durfte', accept: ['durfte'] },
    { id: 'h', sentence: 'Wir ____ letztes Jahr nach Berlin ziehen. (wollen)', translation: 'Voiam să ne mutăm anul trecut la Berlin.', correct: 'wollten', accept: ['wollten'] },
    { id: 'i', sentence: 'Andreea und Carolina ____ alle Antworten beantworten. (können)', translation: 'Andreea și Carolina puteau să răspundă la toate întrebările.', correct: 'konnten', accept: ['konnten'] },
    { id: 'j', sentence: 'Du ____ gestern doch deine Hausaufgaben machen, oder? (sollen)', translation: 'Trebuia să-ți faci temele ieri, nu?', correct: 'solltest', accept: ['solltest'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>📐 Completează cu forma corectă la Präteritum (imperfect) a verbului modal.</strong><br>
        <em>Reamintire:</em> rădăcină + -te/-test/-te/-ten/-tet/-ten. Atenție: dürfen/können/müssen pierd Umlaut-ul (durf-/konn-/muss-).
    </div>`;
    ex4Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;">${it.sentence}<br><em style="color:#6b7280; font-size:0.9rem;">${it.translation}</em></p>
                <input type="text" id="ex4-${it.id}" placeholder="forma modală la Präteritum...">
            </div>
            <div class="feedback" id="ex4-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const inp = document.getElementById(`ex4-${it.id}`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const user = normalizeAnswer(inp.value);
        const ok = it.accept.some(a => normalizeAnswer(a) === user);
        if (ok) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex4Data.length };
}

function resetEx4() {
    buildEx4();
    const s = document.getElementById('score-4');
    if (s) s.textContent = '';
}

// ============================================
// EX 5: Mix — weil + dass + Imperativ (10 itemi)
// ============================================
const ex5Data = [
    {
        id: 'a',
        ro: 'Andreea e fericită pentru că a terminat facultatea. (Perfekt)',
        correct: 'Andreea ist glücklich, weil sie das Studium beendet hat.',
        accept: ['andreea ist glucklich weil sie das studium beendet hat']
    },
    {
        id: 'b',
        ro: 'Mihai spune că aduce un tort. (Indirekte Rede)',
        correct: 'Mihai sagt, dass er eine Torte mitbringt.',
        accept: ['mihai sagt dass er eine torte mitbringt']
    },
    {
        id: 'c',
        ro: 'Fii punctual! (la o singură persoană — du)',
        correct: 'Sei pünktlich!',
        accept: ['sei punktlich', 'sei punktlich!']
    },
    {
        id: 'd',
        ro: 'Carolina e mândră pentru că Andreea a promovat. (Perfekt)',
        correct: 'Carolina ist stolz, weil Andreea bestanden hat.',
        accept: ['carolina ist stolz weil andreea bestanden hat']
    },
    {
        id: 'e',
        ro: 'Annette zice că vine la party. (Indirekte Rede)',
        correct: 'Annette sagt, dass sie zur Party kommt.',
        accept: ['annette sagt dass sie zur party kommt']
    },
    {
        id: 'f',
        ro: 'Fiți atenți! (la mai multe persoane — ihr)',
        correct: 'Seid vorsichtig!',
        accept: ['seid vorsichtig', 'seid vorsichtig!']
    },
    {
        id: 'g',
        ro: 'Florian nu poate veni pentru că trebuie să muncească. (Modal)',
        correct: 'Florian kann nicht kommen, weil er arbeiten muss.',
        accept: ['florian kann nicht kommen weil er arbeiten muss']
    },
    {
        id: 'h',
        ro: 'Acar povestește că s-a sculat la șase. (Indirekte Rede + Perfekt)',
        correct: 'Acar erzählt, dass er um sechs aufgestanden ist.',
        accept: ['acar erzahlt dass er um sechs aufgestanden ist']
    },
    {
        id: 'i',
        ro: 'Vă rog să fiți, doamnă, amabilă. (forma politicoasă Sie)',
        correct: 'Seien Sie bitte freundlich.',
        accept: ['seien sie bitte freundlich', 'seien sie bitte freundlich.']
    },
    {
        id: 'j',
        ro: 'Eram obosită ieri pentru că am învățat mult. (Präteritum + Perfekt cu weil)',
        correct: 'Ich war gestern müde, weil ich viel gelernt habe.',
        accept: ['ich war gestern mude weil ich viel gelernt habe']
    }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction">
        <strong>🎯 Traduce în germană. Folosește weil, dass sau imperativul (Sei!, Seid!, Seien Sie!).</strong><br>
        <em>Verifică:</em> virgule ÎNAINTE de weil/dass + verbul la SFÂRȘIT în propoziții subordonate.
    </div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item">
            <span class="exercise-number">${i + 1}</span>
            <div class="input-group">
                <p style="margin-bottom:6px;"><strong>🇷🇴 ${it.ro}</strong></p>
                <input type="text" id="ex5-${it.id}" placeholder="Scrie traducerea în germană...">
            </div>
            <div class="feedback" id="ex5-f${it.id}"></div>
        </div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        if (answerMatches(inp.value, it.accept)) {
            fb.className = 'feedback correct';
            fb.textContent = `✓ Richtig! ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

function resetEx5() {
    buildEx5();
    const s = document.getElementById('score-5');
    if (s) s.textContent = '';
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5();
});
