// ============================================
// TEORIE - Andreeas Diplom (A2.1 · Lecția 2)
// Claudia Toth · Annettes Deutschkurs
// Sursă DF: INT203-211 · sintetizat + adaptat la castul Annettes Deutschkurs
// Tematica: Nebensätze cu weil + dass (Indirekte Rede) + Modalverbe la Präteritum + Imperativul lui sein
// ============================================

const theoryHTML = `
    <!-- 0: Intro Story Andreeas Diplom -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎓 1. Andreeas Diplom — povestea</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-andreeas-diplom-story.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="cast-banner">
                <h4>🎭 Personajele lecției</h4>
                <div class="cast-grid">
                    <div class="cast-card"><img src="images/andreea.png" alt="Andreea"><span class="name">Andreea</span><span class="detail">Studentă Pädagogik · Potsdam</span></div>
                    <div class="cast-card"><img src="images/mihai.png" alt="Mihai"><span class="name">Mihai</span><span class="detail">Bucătar · Potsdam</span></div>
                    <div class="cast-card"><img src="images/annette.png" alt="Annette"><span class="name">Annette</span><span class="detail">Profesoara · Berlin</span></div>
                    <div class="cast-card"><img src="images/carolina.png" alt="Carolina"><span class="name">Carolina</span><span class="detail">Fotografă · Berlin</span></div>
                    <div class="cast-card"><img src="images/florian.png" alt="Florian"><span class="name">Florian</span><span class="detail">Doctor · Berlin</span></div>
                    <div class="cast-card"><img src="images/acar.png" alt="Acar"><span class="name">Acar</span><span class="detail">Maistru · Oranienburg</span></div>
                </div>
            </div>

            <div class="theory-box">
                <h4>📖 Astăzi e o zi mare pentru Andreea</h4>
                <p>După <strong>3 ani de studii</strong> la Universitatea Potsdam, Andreea primește azi <strong>Bachelor-ul în Pädagogik</strong>. E emoționată, dar și obosită — a învățat MULT pentru examenele finale. La ceremonie sunt prezenți părinții ei din România, Annette (profesoara de germană de la cursurile pentru adulți) și prietenii: Mihai, Carolina, Florian, Acar.</p>
            </div>

            <div class="theory-box">
                <h4>💬 Dialogul: Andreea + Mihai (după ceremonie)</h4>
                <p><strong style="color:#065f46;">Mihai:</strong> Glückwunsch, Andreea! Wie war die Prüfung?<br><span class="ro-translation">Felicitări, Andreea! Cum a fost examenul?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Sehr gut! Ich bin so glücklich, <strong>weil ich endlich fertig bin</strong>!<br><span class="ro-translation">Foarte bine! Sunt așa fericită, pentru că în sfârșit am terminat!</span></p>
                <p><strong style="color:#065f46;">Mihai:</strong> Feiern wir am Wochenende?<br><span class="ro-translation">Sărbătorim weekend-ul?</span></p>
                <p><strong style="color:#065f46;">Andreea:</strong> Klar! Ich lade alle ein. Annette sagt, <strong>dass sie eine Torte bringt</strong>.<br><span class="ro-translation">Sigur! Invit pe toți. Annette spune că aduce un tort.</span></p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>În germană, când vrei să spui DE CE faci ceva, folosești <strong>weil</strong> (= „pentru că"). Când povestești ce zice altcineva, folosești <strong>dass</strong> (= „că"). Atenție: la ambele, verbul merge la SFÂRȘITUL propoziției! Asta e cea mai mare diferență față de română.</em>
                </div>
            </div>

            <!-- ===== TRIMITE TEXTUL CLAUDIEI — REGULA 18 ===== -->
            <div style="background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border: 2px solid #10B981; border-radius: 14px; padding: 24px 22px; margin-top: 22px; text-align: center; box-shadow: 0 2px 8px rgba(16, 185, 129, 0.12);">
                <div style="font-size: 2.2rem; margin-bottom: 4px;">✍️</div>
                <h4 style="color: #065f46; font-size: 1.2rem; margin: 0 0 8px; font-weight: bold;">Vrei să-ți corectez textul?</h4>
                <p style="color: #047857; font-size: 0.95rem; margin: 0 0 16px; max-width: 520px; margin-left: auto; margin-right: auto; line-height: 1.5;">
                    Scrie un text de <strong>80+ cuvinte despre propria ta absolvire</strong> (școală / facultate / curs).<br>
                    Folosește <strong>weil</strong> + <strong>dass</strong> + <strong>Modalverbe la Präteritum</strong> (musste, wollte, durfte...). Îți răspund personal pe email cu corectările. 🦋
                </p>
                <a href="https://forms.gle/gdoy3G3UTXwHGhsz9" target="_blank" rel="noopener noreferrer" style="display: inline-block; background: #10B981; color: white; padding: 13px 30px; border-radius: 10px; text-decoration: none; font-weight: bold; font-size: 1rem; box-shadow: 0 2px 6px rgba(16, 185, 129, 0.3); transition: all 0.2s;" onmouseover="this.style.background='#047857'; this.style.transform='translateY(-1px)';" onmouseout="this.style.background='#10B981'; this.style.transform='translateY(0)';">
                    Trimite textul Claudiei →
                </a>
                <p style="color: #6b7280; font-size: 0.78rem; margin-top: 12px; font-style: italic;">
                    ʚଓ Răspuns personal pe email · Nu uita să-ți treci adresa de email în formular
                </p>
            </div>
        </div>
    </div>

    <!-- 1: Modalverbe la Präteritum -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>📐 2. Modalverbe la Präteritum (musste, wollte, durfte, konnte, sollte)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-modalverbe-praeteritum.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Regula: rădăcina + terminație -te</h4>
                <p>Modalverbele formează <strong>Präteritum (imperfectul — timpul scris/povestit)</strong> astfel:</p>
                <ul>
                    <li><strong>Pierdem Umlaut-ul</strong> (ü/ö/ä → u/o/a): <em>müssen → muss-</em>, <em>können → konn-</em>, <em>dürfen → durf-</em></li>
                    <li><strong>Adăugăm -te + terminația persoanei</strong></li>
                </ul>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Tabel: rădăcini Präteritum</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Infinitiv</th><th>Rădăcină Präteritum</th><th>Traducere RO (Imperfect)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>sollen</strong></td><td>soll-</td><td>(eu) trebuia (impus de altcineva)</td></tr>
                    <tr><td><strong>wollen</strong></td><td>woll-</td><td>(eu) voiam</td></tr>
                    <tr><td><strong>dürfen</strong></td><td>d<span style="color:#dc2626;">u</span>rf- <em>(fără Umlaut!)</em></td><td>(eu) aveam voie</td></tr>
                    <tr><td><strong>können</strong></td><td>k<span style="color:#dc2626;">o</span>nn- <em>(fără Umlaut!)</em></td><td>(eu) puteam / știam</td></tr>
                    <tr><td><strong>müssen</strong></td><td>m<span style="color:#dc2626;">u</span>ss- <em>(fără Umlaut!)</em></td><td>(eu) trebuia</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Tabel: 6 terminații (3 persoane × 2 numere = 6 forme)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Pronume</th><th>Terminație</th><th>Exemplu: müssen (a trebui)</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>ich</strong></td><td>-te</td><td>ich m<span style="color:#dc2626;">u</span>ss<strong>te</strong></td><td>eu trebuia</td></tr>
                    <tr><td><strong>du</strong></td><td>-test</td><td>du m<span style="color:#dc2626;">u</span>ss<strong>test</strong></td><td>tu trebuiai</td></tr>
                    <tr><td><strong>er/sie/es</strong></td><td>-te</td><td>er m<span style="color:#dc2626;">u</span>ss<strong>te</strong></td><td>el trebuia</td></tr>
                    <tr><td><strong>wir</strong></td><td>-ten</td><td>wir m<span style="color:#dc2626;">u</span>ss<strong>ten</strong></td><td>noi trebuiam</td></tr>
                    <tr><td><strong>ihr</strong></td><td>-tet</td><td>ihr m<span style="color:#dc2626;">u</span>ss<strong>tet</strong></td><td>voi trebuiați</td></tr>
                    <tr><td><strong>sie/Sie</strong></td><td>-ten</td><td>sie m<span style="color:#dc2626;">u</span>ss<strong>ten</strong></td><td>ei/ele trebuiau</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Letztes Jahr <strong>wollte</strong> Andreea Lehrerin werden.</p>
                <p class="ro">Anul trecut, Andreea voia să devină profesoară.</p>
            </div>
            <div class="example-box">
                <p class="de">Als Kind <strong>durfte</strong> ich nicht oft ins Kino gehen.</p>
                <p class="ro">Când eram copil, nu aveam voie să merg des la cinema.</p>
            </div>
            <div class="example-box">
                <p class="de">Wir <strong>mussten</strong> für die Prüfung viel lernen.</p>
                <p class="ro">Trebuia să învățăm mult pentru examen.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Atenție! <strong>Präteritum</strong> în germană = <strong>IMPERFECT</strong> în română („eu trebuia", „eu voiam"), NU mai mult ca perfect („eu trebuisem", „eu voisem"). Mai mult ca perfect-ul german se cheamă <strong>Plusquamperfekt</strong> și se învață la B1.</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 2: Nebensätze cu WEIL -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🔗 3. Nebensätze cu WEIL — verbul la SFÂRȘIT</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-weil-nebensatze.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 REGULA DE AUR a Nebensätze: verbul la SFÂRȘIT</h4>
                <p>Când folosești <strong>weil</strong> (= „pentru că"), apare o propoziție <strong>subordonată</strong> (Nebensatz). În subordonată, verbul nu mai stă pe poziția 2 — merge la SFÂRȘITUL propoziției.</p>
                <p>Comparație DE ↔ RO:</p>
                <ul>
                    <li>🇷🇴 „Andreea e fericită, <strong>pentru că ea a terminat</strong> facultatea."</li>
                    <li>🇩🇪 „Andreea ist glücklich, weil sie das Studium <strong>beendet hat</strong>." (verb la sfârșit!)</li>
                </ul>
                <p>Plus: ÎNAINTE de „weil" pui mereu <strong>VIRGULĂ</strong>.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 4 variante de Nebensätze cu weil</h4>

            <h4 style="color:#065f46; margin-top:10px;">A. Cu verb simplu la Präsens</h4>
            <div class="example-box">
                <p class="de">Andreea ist glücklich, weil sie endlich Bachelor <strong>hat</strong>.</p>
                <p class="ro">Andreea e fericită, pentru că în sfârșit are diploma de Bachelor.</p>
            </div>
            <div class="example-box">
                <p class="de">Mihai bringt eine Torte, weil Andreea Geburtstag <strong>hat</strong>.</p>
                <p class="ro">Mihai aduce un tort, pentru că Andreea are ziua de naștere.</p>
            </div>

            <h4 style="color:#065f46; margin-top:10px;">B. Cu verb modal (verbul principal + modalul la final)</h4>
            <div class="example-box">
                <p class="de">Andreea lernt Deutsch, weil sie in Deutschland <strong>arbeiten möchte</strong>.</p>
                <p class="ro">Andreea învață germană, pentru că vrea să muncească în Germania.</p>
            </div>
            <div class="example-box">
                <p class="de">Florian kann nicht kommen, weil er heute <strong>arbeiten muss</strong>.</p>
                <p class="ro">Florian nu poate veni, pentru că trebuie să muncească azi.</p>
            </div>

            <h4 style="color:#065f46; margin-top:10px;">C. Cu verb separabil (Trennbare Verben — se LIPESC la sfârșit)</h4>
            <div class="example-box">
                <p class="de">Wir gehen früh nach Hause, weil der Bus gleich <strong>abfährt</strong>.</p>
                <p class="ro">Mergem devreme acasă, pentru că autobuzul pleacă imediat.</p>
            </div>
            <div class="example-box">
                <p class="de">Acar ist müde, weil er um sechs <strong>aufgestanden ist</strong>.</p>
                <p class="ro">Acar e obosit, pentru că s-a sculat la șase.</p>
            </div>

            <h4 style="color:#065f46; margin-top:10px;">D. Cu Perfekt (participiul + auxiliarul la final)</h4>
            <div class="example-box">
                <p class="de">Carolina ist stolz, weil sie alle Prüfungen <strong>bestanden hat</strong>.</p>
                <p class="ro">Carolina e mândră, pentru că a promovat toate examenele.</p>
            </div>
            <div class="example-box">
                <p class="de">Andreea ist müde, weil sie viel <strong>gelernt hat</strong>.</p>
                <p class="ro">Andreea e obosită, pentru că a învățat mult.</p>
            </div>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>Trucul meu: când scrii o propoziție cu „weil", IMAGINEAZĂ-ȚI că verbul ESTE MAGNET și se LIPEȘTE la sfârșitul propoziției. La modale: VERBUL PRINCIPAL e ÎNAINTEA modalului (arbeiten möchte, NU möchte arbeiten). La Perfekt: PARTICIPIUL e ÎNAINTEA auxiliarului (gelernt hat, NU hat gelernt).</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 3: Nebensätze cu DASS -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>💬 4. Nebensätze cu DASS — vorbire indirectă (Indirekte Rede)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-dass-indirekte-rede.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Ce e Indirekte Rede?</h4>
                <p>Când <strong>repovestești</strong> ce a zis altcineva, NU folosești ghilimele. În loc de „Andreea: «Eu vin la party»", spui „Andreea zice CĂ vine la party". Aici intervine <strong>dass</strong> (= „că").</p>
                <p>Regula sintaxei e IDENTICĂ cu weil: verbul merge la SFÂRȘIT + virgulă ÎNAINTE de dass.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Transformare directă → indirectă</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Vorbire directă (Direkte Rede)</th><th>Vorbire indirectă (Indirekte Rede)</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Andreea: „<strong>Ich</strong> komme zur Party."<br><span class="ro-translation">Eu vin la party.</span></td>
                        <td>Andreea sagt, dass <strong>sie</strong> zur Party <strong>kommt</strong>.<br><span class="ro-translation">Andreea spune că vine la party.</span></td>
                    </tr>
                    <tr>
                        <td>Mihai: „<strong>Ich bringe</strong> eine Torte mit."<br><span class="ro-translation">Eu aduc un tort.</span></td>
                        <td>Mihai sagt, dass <strong>er</strong> eine Torte <strong>mitbringt</strong>.<br><span class="ro-translation">Mihai spune că aduce un tort.</span></td>
                    </tr>
                    <tr>
                        <td>Annette: „<strong>Ich bin</strong> sehr stolz auf Andreea."<br><span class="ro-translation">Sunt foarte mândră de Andreea.</span></td>
                        <td>Annette sagt, dass <strong>sie</strong> sehr stolz auf Andreea <strong>ist</strong>.<br><span class="ro-translation">Annette spune că este foarte mândră de Andreea.</span></td>
                    </tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>ATENȚIE la pronume! Când transformi „<strong>ich</strong>" (eu) la indirektive, devine „<strong>er/sie</strong>" (el/ea — persoana 3). Plus „mein" → „sein/ihr". Cursantul român uită des să schimbe pronumele!</em>
                </div>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 DASS la Perfekt (vorbire indirectă despre trecut)</h4>
            <div class="example-box">
                <p class="de">Carolina sagt, dass sie viele Fotos <strong>gemacht hat</strong>.</p>
                <p class="ro">Carolina zice că a făcut multe poze.</p>
            </div>
            <div class="example-box">
                <p class="de">Acar erzählt, dass er gestern bis spät <strong>gearbeitet hat</strong>.</p>
                <p class="ro">Acar povestește că a lucrat ieri până târziu.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Variantă FĂRĂ dass (Hauptsatz)</h4>
            <p>În germana vorbită des, poți elimina dass și folosi o propoziție normală (verb pe poziția 2):</p>
            <div class="example-box">
                <p class="de">Andreea sagt, dass sie zur Party kommt. (cu dass — verb la sfârșit)</p>
                <p class="ro">vs.</p>
                <p class="de">Andreea sagt, <strong>sie kommt</strong> zur Party. (fără dass — verb pe poziția 2)</p>
                <p class="ro">Ambele înseamnă: Andreea spune că vine la party.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Alte verbe pentru Indirekte Rede</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Verb DE</th><th>Traducere RO</th><th>Exemplu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>sagen</strong></td><td>a spune</td><td>Er sagt, dass...</td></tr>
                    <tr><td><strong>erzählen</strong></td><td>a povesti</td><td>Sie erzählt, dass...</td></tr>
                    <tr><td><strong>meinen</strong></td><td>a fi de părere</td><td>Er meint, dass...</td></tr>
                    <tr><td><strong>glauben</strong></td><td>a crede</td><td>Sie glaubt, dass...</td></tr>
                    <tr><td><strong>finden</strong></td><td>a găsi (părere)</td><td>Er findet, dass...</td></tr>
                    <tr><td><strong>denken</strong></td><td>a gândi</td><td>Sie denkt, dass...</td></tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Imperativul lui SEIN -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>📣 5. Imperativul lui SEIN (Sei!) + alte verbe la imperativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-imperativ-sein.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <div class="theory-box">
                <h4>🔑 Imperativul = comandă / sfat (recap A1.1 L10)</h4>
                <p>În A1 ai învățat imperativul verbelor regulate: <em>Mach das Fenster auf!</em> (Deschide fereastra!). Aici introducem <strong>excepția importantă: SEIN</strong> are formă SPECIALĂ la imperativ.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Imperativul lui SEIN (NEREGULAT!)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Cui?</th><th>Imperativ DE</th><th>Traducere RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>du</strong> (singular)</td><td><strong>Sei!</strong></td><td>Fii!</td></tr>
                    <tr><td><strong>ihr</strong> (plural informal)</td><td><strong>Seid!</strong></td><td>Fiți!</td></tr>
                    <tr><td><strong>Sie</strong> (politicos)</td><td><strong>Seien Sie!</strong></td><td>Fiți (dvs.)!</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de"><strong>Sei</strong> bitte pünktlich!</p>
                <p class="ro">Te rog să fii punctual!</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>Sei</strong> kein Spielverderber! <em>(zicală)</em></p>
                <p class="ro">Nu fi prost dispus! / Nu strica jocul!</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>Seien Sie</strong> so freundlich und schließen Sie die Tür.</p>
                <p class="ro">Fiți, vă rog, amabil(ă) și închideți ușa.</p>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Recap imperativ verbe regulate (din A1.1 L10)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Verb (Infinitiv)</th><th>du-form (radical fără -en)</th><th>ihr-form (+ -t)</th><th>Sie-form (Infinitiv + Sie)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>kommen</strong> (a veni)</td><td>Komm!</td><td>Kommt!</td><td>Kommen Sie!</td></tr>
                    <tr><td><strong>warten</strong> (a aștepta)</td><td>Warte!</td><td>Wartet!</td><td>Warten Sie!</td></tr>
                    <tr><td><strong>helfen</strong> (TARE, e→i)</td><td>Hilf!</td><td>Helft!</td><td>Helfen Sie!</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>SEIN e UNICUL verb cu imperativ complet special. „Sei!" se folosește des în expresii fixe: „Sei still!" (Taci!), „Sei vorsichtig!" (Fii atent!), „Sei nicht traurig!" (Nu fi tristă!).</em>
                </div>
            </div>
        </div>
    </div>

    <!-- 5: Vocabular -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>📚 6. Vocabular: Schule + Party + Adjective stări</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-vocabular-schule-party.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă secțiunea</span>
            </div>

            <h4 style="color:#065f46; margin-top:14px;">📋 Schule + Studium (substantive cu Sg + Pl)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Singular DE — Singular RO</th><th>Plural DE — Plural RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>die Prüfung</strong> — examenul</td><td><strong>die Prüfungen</strong> — examenele</td></tr>
                    <tr><td><strong>die Klausur</strong> — lucrarea (test scris)</td><td><strong>die Klausuren</strong> — lucrările</td></tr>
                    <tr><td><strong>das Zeugnis</strong> — diploma / foaia matricolă</td><td><strong>die Zeugnisse</strong> — diplomele</td></tr>
                    <tr><td><strong>der Abschluss</strong> — absolvirea (final)</td><td><strong>die Abschlüsse</strong> — absolvirile</td></tr>
                    <tr><td><strong>die Note</strong> — nota</td><td><strong>die Noten</strong> — notele</td></tr>
                    <tr><td><strong>der Bachelor</strong> — diploma de licență</td><td><strong>die Bachelor</strong> — diplomele de licență</td></tr>
                    <tr><td><strong>die Universität</strong> — universitatea</td><td><strong>die Universitäten</strong> — universitățile</td></tr>
                    <tr><td><strong>das Studium</strong> — studiul / facultatea</td><td>— <em>(plural rar)</em></td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Party (substantive cu Sg + Pl)</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Singular DE — Singular RO</th><th>Plural DE — Plural RO</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>der Geburtstag</strong> — ziua de naștere</td><td><strong>die Geburtstage</strong> — zilele de naștere</td></tr>
                    <tr><td><strong>die Party</strong> — petrecerea (împrumutat EN)</td><td><strong>die Partys</strong> — petrecerile</td></tr>
                    <tr><td><strong>die Torte</strong> — tortul</td><td><strong>die Torten</strong> — torturile</td></tr>
                    <tr><td><strong>das Getränk</strong> — băutura</td><td><strong>die Getränke</strong> — băuturile</td></tr>
                    <tr><td><strong>der Gast</strong> — oaspetele</td><td><strong>die Gäste</strong> — oaspeții</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Adjective pentru stări emoționale</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Adjectiv DE</th><th>Traducere RO</th><th>Folosit cu</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>glücklich</strong></td><td>fericit(ă)</td><td>weil + cauză</td></tr>
                    <tr><td><strong>traurig</strong></td><td>trist(ă)</td><td>weil + cauză</td></tr>
                    <tr><td><strong>stolz</strong> (auf + Akk)</td><td>mândru/-ă de</td><td>auf + acuzativ</td></tr>
                    <tr><td><strong>müde</strong></td><td>obosit(ă)</td><td>weil + cauză</td></tr>
                    <tr><td><strong>nervös</strong></td><td>nervos / agitat</td><td>weil + cauză</td></tr>
                    <tr><td><strong>gestresst</strong></td><td>stresat(ă)</td><td>weil + cauză</td></tr>
                    <tr><td><strong>zufrieden</strong></td><td>mulțumit(ă)</td><td>mit + dativ</td></tr>
                    <tr><td><strong>überrascht</strong></td><td>surprins(ă)</td><td>von + dativ</td></tr>
                    <tr><td><strong>enttäuscht</strong></td><td>dezamăgit(ă)</td><td>von + dativ</td></tr>
                    <tr><td><strong>peinlich</strong></td><td>jenant / penibil</td><td>impersonal („das ist peinlich")</td></tr>
                </tbody>
            </table>

            <h4 style="color:#065f46; margin-top:14px;">📋 Conectori importanți</h4>
            <table class="grammar-table">
                <thead>
                    <tr><th>Conector DE</th><th>Traducere RO</th><th>Tip propoziție</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>weil</strong></td><td>pentru că</td><td>Nebensatz (verb la sfârșit)</td></tr>
                    <tr><td><strong>dass</strong></td><td>că</td><td>Nebensatz (verb la sfârșit)</td></tr>
                    <tr><td><strong>denn</strong></td><td>fiindcă (sinonim cu weil)</td><td>Hauptsatz (verb pe poziția 2!)</td></tr>
                    <tr><td><strong>deswegen / deshalb</strong></td><td>de aceea / din această cauză</td><td>Hauptsatz (inversiune)</td></tr>
                </tbody>
            </table>

            <div class="andreea-note">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea zice:</div>
                    <em>CAPCANĂ frecventă: „<strong>denn</strong>" și „<strong>weil</strong>" se traduc IDENTIC în română („pentru că") DAR au sintaxă DIFERITĂ în germană! „weil" → verb la sfârșit. „denn" → verb pe poziția 2 ca în Hauptsatz normal. Ex: „Ich komme nicht, <strong>weil</strong> ich krank <strong>bin</strong>." vs „Ich komme nicht, <strong>denn</strong> ich <strong>bin</strong> krank."</em>
                </div>
            </div>
        </div>
    </div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('theory-container');
    if (container) container.innerHTML = theoryHTML;
});
