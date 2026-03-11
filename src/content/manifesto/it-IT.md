---
title: "Il Manifesto Friendly"
version: "1.0"
date: "11 marzo 2026"
lang: "it-IT"
langLabel: "Italiano"
description: "Un insieme volontario di principi per Software Developer, Gatekeeper e User open-source."
---

<h2 id="tldr">TL;DR</h2>

Il Manifesto Friendly è un insieme volontario di principi a cui Software Developer[<sup>1</sup>](#def-1) (Sviluppatori di Software), Gatekeeper[<sup>2</sup>](#def-2) (Guardiani) e User[<sup>3</sup>](#def-3) (Utenti) open-source possono scegliere di aderire.

In sintesi:
- I **Software Developer** si impegnano a sviluppare software onesto, sicuro e rispettoso, che non sfrutti i propri User.
- I **Gatekeeper** si impegnano a distribuire software in modo equo, trasparente e senza controllo soggettivo o ideologico.
- Gli **User** si impegnano a interagire con gli sviluppatori e le comunità in modo rispettoso, in buona fede e con aspettative realistiche.

<h2 id="table-of-contents">Indice</h2>

- [1. Premessa](#1-preface)
- [2. Principi per i Software Developer](#2-principles-for-software-developers)
  - [2.1. Sicurezza e Qualità](#21-security--quality)
  - [2.2. Privacy e Trasparenza](#22-privacy--transparency)
  - [2.3. Rispetto dell'Utente](#23-user-respect)
  - [2.4. Licenze e Onestà](#24-licensing--honesty)
  - [2.5. Pratiche Predatorie](#25-predatory-practices)
  - [2.6. Accesso per Tutti](#26-access-for-everyone)
- [3. Principi per i Gatekeeper](#3-principles-for-gatekeepers)
  - [3.1. Trasparenza e Comunicazione](#31-transparency--communication)
  - [3.2. Sicurezza e Privacy](#32-security--privacy)
  - [3.3. Equità e Obiettività](#33-fairness--objectivity)
  - [3.4. Relazioni con gli Sviluppatori](#34-developer-relations)
  - [3.5. Rispetto dell'Utente](#35-user-respect)
- [4. Principi per gli User](#4-principles-for-users)
  - [4.1. Rispetto e Comunicazione](#41-respect--communication)
  - [4.2. Buona Fede](#42-good-faith)
  - [4.3. Aspettative](#43-expectations)
- [5. Definizioni](#5-definitions)

<h2 id="1-preface">1. Premessa</h2>

Il movimento open-source ha cambiato radicalmente il modo in cui il software viene sviluppato, condiviso e utilizzato. Quella che era nata come una filosofia di collaborazione e libertà è cresciuta fino a diventare un ecosistema che alimenta gran parte del mondo moderno, dai sistemi operativi e i browser web all'infrastruttura alla base dei più grandi servizi su internet.

Tuttavia, con la crescita di questo ecosistema, sono cresciute anche le strutture che lo circondano. I Gatekeeper -- app store, repository di pacchetti, cataloghi software -- sono diventati il mezzo principale attraverso cui gli User scoprono e installano software. Queste Platform (Piattaforme) svolgono una funzione preziosa: offrono fiducia, comodità e visibilità. Ma detengono anche un potere significativo. La decisione di accettare o rifiutare un software, di promuoverlo o nasconderlo, di applicare le regole in modo coerente o selettivo, è una decisione che incide direttamente sul sostentamento e sulla reputazione degli sviluppatori che lo creano e sulle scelte a disposizione degli User che ne dipendono.

La relazione tra Software Developer e i loro User ha il potenziale per essere una delle più produttive nel campo della tecnologia: gli sviluppatori costruiscono qualcosa di utile e gli User contribuiscono a modellarlo e migliorarlo. Ma senza una comprensione condivisa di ciò che ciascuna parte può ragionevolmente aspettarsi dall'altra, questa relazione può deteriorarsi. Ciò che manca non è la buona volontà, ma un quadro comune per esprimerla.

Il Manifesto Friendly esiste per colmare questa lacuna. È un insieme volontario di principi per tre gruppi -- Software Developer, Gatekeeper e User -- che definisce cosa significa partecipare all'ecosistema open-source in buona fede. Non è una licenza. Non è un contratto legale. Non è applicabile da alcuna autorità. È semplicemente un impegno pubblico: un modo per individui e organizzazioni di dire "Questo è il modo in cui scegliamo di operare, e vi invitiamo a ritenerci responsabili".

L'adesione a questo manifesto è interamente volontaria. Nessuno è obbligato ad adottarlo e nessuno dovrebbe essere penalizzato per aver scelto di non farlo. Ma adottandolo, si sceglie di far parte di una comunità che valorizza la trasparenza, l'equità e il rispetto reciproco, e si offre agli altri uno standard chiaro rispetto al quale misurare tale impegno.

<h2 id="2-principles-for-software-developers">2. Principi per i Software Developer</h2>
Scegliendo di aderire al Manifesto Friendly, tu, in qualità di Software Developer, scegli di aderire ai seguenti principi.

<h3 id="21-security--quality">2.1. Sicurezza e qualità</h3>

**2.1.1.** Non distribuirai consapevolmente software contenente malware, spyware o codice progettato per danneggiare gli User o i loro sistemi.

**2.1.2.** Compirai sforzi ragionevoli per risolvere le vulnerabilità di sicurezza segnalate in modo tempestivo.

**2.1.3.** Descriverai accuratamente le funzionalità del tuo software su qualsiasi Platform[<sup>4</sup>](#def-4) dove viene distribuito, inclusa la tua stessa Platform (come il tuo sito web o repository di codice pubblico). Ciò include i metadati di distribuzione, la descrizione, gli screenshot e i permessi.

**2.1.4.** Descriverai accuratamente le modifiche contenute in ogni nuova versione del tuo software. Ad esempio, etichettare semplicemente una nuova versione del software con "miglioramenti delle prestazioni e correzione di bug" non è ammissibile.

<h3 id="22-privacy--transparency">2.2. Privacy e trasparenza</h3>

**2.2.1.** Sarai trasparente riguardo ai dati raccolti dal tuo software, se presenti, e per quale scopo.

**2.2.2.** Non raccoglierai dati degli User oltre quanto necessario per il funzionamento del software, a meno che l'User non acconsenta esplicitamente.

**2.2.3.** In aggiunta al principio 2.2.2., qualsiasi interazione in cui l'User possa scegliere di iscriversi per ricevere messaggi dallo sviluppatore deve prevedere la non iscrizione per impostazione predefinita, a meno che i messaggi siano ritenuti fondamentali per il funzionamento continuativo del prodotto o per la sicurezza e la privacy dell'User.

**2.2.4.** In aggiunta al principio 2.2.3., qualsiasi messaggio a cui l'utente è iscritto per impostazione predefinita deve essere utilizzato esclusivamente per gli scopi specifici menzionati nel principio 2.2.3. Nessuna altra comunicazione (ad es. marketing, notizie, offerte e simili) può essere inviata attraverso questo canale.

<h3 id="23-user-respect">2.3. Rispetto dell'User</h3>

**2.3.1.** Non degraderai o limiterai intenzionalmente le funzionalità del tuo software su Platform, distribuzioni o ambienti desktop specifici.

**2.3.2.** Fornirai un metodo ragionevole attraverso il quale gli User possano segnalare bug o richiedere supporto (se quest'ultimo è offerto). Ciò può includere un issue tracker, email, forum o simili.

**2.3.3.** In aggiunta al principio 2.3.2., qualsiasi forum fornito per la segnalazione di bug o il supporto tecnico deve essere di natura asincrona. In linea di principio, ciò significa che le chat di gruppo o le chatroom pubbliche non sono considerate un meccanismo accettabile per il tracciamento dei problemi o la segnalazione di bug se utilizzate in modo esclusivo.

> [!NOTE]
> Il principio 2.3.3. può sembrare a prima vista draconiano. Tuttavia, si noti che non vieta l'uso di chat di gruppo o chatroom per il supporto/segnalazione di bug. Stabilisce però che questo non può essere l'**unico** canale di supporto ufficiale. Gli User non dovrebbero essere tenuti a interagire con lo sviluppatore in tempo reale, specialmente considerando le differenze di fuso orario. Gli User non dovrebbero inoltre dover cercare tra copiose quantità di contenuti non strutturati e non pertinenti al loro problema per seguire un thread di conversazione relativo alla loro segnalazione.

**2.3.4.** Condurrai tutte le interazioni con i tuoi User in modo professionale e rispettoso, indipendentemente dalle circostanze.

> [!NOTE]
> Esempi di comportamento che violano il principio 2.3.4:
> - Ignorare, sminuire o deridere un User per aver presentato una segnalazione di bug o chiesto aiuto.
> - Chiudere segnalazioni di bug con risposte ostili o sarcastiche (ad es. "funziona per me", "non è un bug", "impara a leggere", "non verrà corretto").
> - Ritorsioni contro un User che ha lasciato una recensione negativa ma onesta del tuo software.
> - Attacchi personali contro un User basati sul suo livello di competenza, background o datore di lavoro.
>
> Gli User che dedicano tempo a segnalare un bug o fornire feedback stanno contribuendo al miglioramento del tuo software. Trattali di conseguenza.


<h3 id="24-licensing--honesty">2.4. Licenze e onestà</h3>

**2.4.1.** Ti assicurerai che la licenza dichiarata del tuo software rifletta accuratamente i termini secondo cui viene distribuito.

**2.4.2.** Non rappresenterai in modo errato l'origine, la paternità o l'affiliazione del tuo software.

<h3 id="25-predatory-practices">2.5. Pratiche predatorie</h3>

**2.5.1.** Non progetterai il tuo software per sfruttare vulnerabilità psicologiche, schemi che inducono dipendenza o Dark Patterns[<sup>7</sup>](#def-7) (Pattern Ingannevoli) per manipolare il comportamento degli User (ad es. urgenza artificiale, continuità forzata, costi nascosti, flussi di opt-out deliberatamente confusi).

**2.5.2.** Non subordinerai funzionalità precedentemente gratuite a un paywall senza ragionevole preavviso agli User esistenti.

**2.5.3.** Non utilizzerai notifiche fuorvianti, falsi avvisi di sistema o elementi di interfaccia ingannevoli progettati per indurre gli User a compiere azioni non intenzionali.

**2.5.4.** Se il tuo software offre un livello gratuito o un periodo di prova, comunicherai chiaramente le limitazioni e qualsiasi transizione a un servizio a pagamento prima che l'User investa tempo o dati nella Platform.

**2.5.5.** Non renderai deliberatamente più difficile disinstallare, disattivare o cessare l'uso del tuo software rispetto a quanto lo sia stato installarlo o attivarlo.

**2.5.6.** Non implementerai loot box, meccaniche gacha o qualsiasi meccanismo simile in cui l'User paga per ricompense casuali di valore incerto.

**2.5.7.** Non commercializzerai, pubblicizzerai o promuoverai acquisti in-app, microtransazioni o contenuti a pagamento a User al di sotto dell'età legale del consenso nella giurisdizione dell'User.

**2.5.8.** Se il tuo software è offerto in abbonamento, pubblicherai una roadmap che delinei la frequenza stimata e la portata delle funzionalità nuove o migliorate che gli abbonati possono aspettarsi durante il periodo di abbonamento.

> [!NOTE]
> Il principio 2.5.8. non si applica se l'abbonamento è principalmente finalizzato alla manutenzione di un servizio continuativo (ad es. un backend, API, archiviazione cloud o infrastruttura server) piuttosto che alla fornitura di nuove funzionalità software.

**2.5.9.** Compirai sforzi ragionevoli per stabilire il prezzo del tuo software e degli eventuali abbonamenti associati sulla base del valore reale offerto agli User, piuttosto che sulla posizione dominante di mercato, scarsità artificiale o assenza di alternative.

> [!NOTE]
> Il principio 2.5.9. è intenzionalmente aspirazionale piuttosto che prescrittivo. Non è possibile definire oggettivamente un "prezzo equo". Tuttavia, aderendo a questo principio, stai segnalando ai tuoi User che il tuo prezzo riflette una valutazione in buona fede del valore, non uno sfruttamento della tua posizione di mercato. Gli sviluppatori sono incoraggiati a essere trasparenti riguardo alla logica dei loro prezzi quando possibile.

<h3 id="26-access-for-everyone">2.6. Accessibilità per tutti</h3>

**2.6.1.** Compirai sforzi ragionevoli per garantire che il tuo software sia accessibile agli User con disabilità, inclusa ma non limitata alla compatibilità con screen reader, navigazione esclusivamente da tastiera e contrasto cromatico sufficiente.

**2.6.2.** Compirai sforzi ragionevoli per rendere il tuo software disponibile in più lingue.

> [!NOTE]
> I principi 2.6.1. e 2.6.2. riconoscono che non tutti gli sviluppatori dispongono delle risorse per implementare autonomamente il pieno supporto all'accessibilità o alla localizzazione. Tuttavia, come minimo, dovresti progettare e strutturare il tuo software in modo da consentire ad altri di contribuire con miglioramenti all'accessibilità e traduzioni. Ad esempio, utilizzando API di accessibilità standard, esternalizzando le stringhe rivolte all'utente e accettando contributi della comunità per le traduzioni.

<h2 id="3-principles-for-gatekeepers">3. Principi per i Gatekeeper</h2>
Scegliendo di aderire al Manifesto Friendly, tu, in qualità di Gatekeeper, scegli di aderire ai seguenti principi.

<h3 id="31-transparency--communication">3.1. Trasparenza e comunicazione</h3>

**3.1.1.** Renderai chiaro ai tuoi utenti se la tua Platform effettua attivamente una Review[<sup>6</sup>](#def-6) (Revisione) del software inviato, e in che misura (ad es. audit di sicurezza, scansione automatizzata, Review manuale, nessuna Review).

**3.1.2.** Sarai trasparente riguardo ai tuoi criteri di accettazione/rifiuto e li renderai pubblici.

**3.1.3.** Fornirai un feedback chiaro e attuabile quando richiedi modifiche a una Submission[<sup>5</sup>](#def-5) (Proposta di Pubblicazione).

**3.1.4.** Qualsiasi rifiuto di una Submission deve includere una spiegazione scritta che citi i criteri di Review specifici o il principio violato dalla Submission. Un rifiuto senza giustificazione non è valido.

> [!NOTE]
> Un rifiuto in una sola parola o comunque privo di spiegazione (ad es. "no", "rifiutato", "non idoneo") non è considerato valido ai sensi di questo principio. Lo sviluppatore ha investito tempo nella preparazione e nell'invio del proprio software; ha diritto di sapere *perché* è stato rifiutato, con riferimento a criteri specifici e pubblicati (vedi principio 3.1.2).

**3.1.5.** Condurrai tutte le interazioni con gli sviluppatori in modo professionale e rispettoso, indipendentemente dalle circostanze.

> [!NOTE]
> Esempi di comportamento che violano il principio 3.1.5:
> - Fornire feedback sprezzanti, scortesi o ostili su una Submission a causa del carico di lavoro, della pressione temporale o della frustrazione personale.
> - Trattare la Submission di uno sviluppatore in modo ingiusto a causa di un precedente disaccordo o conflitto personale con lo sviluppatore.
> - Effettuare attacchi personali contro uno sviluppatore, incluse osservazioni sul suo datore di lavoro, background o carattere.
> - Utilizzare la propria posizione di revisore per risolvere rancori personali o esercitare autorità oltre l'ambito della Review.
>
> Una Review è una revisione del software, non un giudizio sulla persona che lo ha scritto.


<h3 id="32-security--privacy">3.2. Sicurezza e privacy</h3>

> [!NOTE]
> Questa sezione non si applica se, in conformità con il principio 3.1.1, la tua Platform dichiara di non effettuare Review sul software inviato e pertanto accetta tutte le Submission.

**3.2.1.** Non distribuirai, per quanto nelle tue possibilità, software con vulnerabilità di sicurezza critiche note.

**3.2.2.** Non distribuirai, per quanto nelle tue possibilità, software noto per violare intenzionalmente la privacy degli User a fini commerciali o di altro tipo.

**3.2.3.** Disporrai di un processo ragionevole di divulgazione per la segnalazione di problemi di sicurezza nel software che distribuisci.

<h3 id="33-fairness--objectivity">3.3. Equità e obiettività</h3>

**3.3.1.** Riconosci che lo scopo di una Platform di distribuzione è distribuire e promuovere il software distribuito su di essa, e non creare un giardino recintato ideologico.

**3.3.2.** Non rifiuterai software sulla base di preferenze estetiche soggettive.

> [!NOTE]
> Esempi di ragioni estetiche non valide per rifiutare una Submission secondo il principio 3.3.2:
> - Rifiutare una Submission perché non ti piace il logo.
> - Rifiutare una Submission perché non ti piace come è formattato il nome del software (ad es. rifiutare una Submission perché il nome è 'DigitalPaint' anziché 'Digital Paint' o 'Digitalpaint').
> - Rifiutare una Submission perché non ti piace lo schema di colori utilizzato.
> - Rifiutare una Submission perché non utilizza un particolare linguaggio di design, tavolozza di colori o tema.
> - Rifiutare una Submission per l'utilizzo di un layout di finestra non standard.
> - Rifiutare una Submission perché utilizza widget personalizzati anziché quelli nativi della Platform.

> [!TIP]
> Esempi di ragioni estetiche ammissibili per rifiutare una Submission:
> - Il logo o il nome della Submission è progettato per impersonare un'altra applicazione o fuorviare gli User.
> - Il logo della Submission contiene immagini offensive o illegali.
> - Il nome della Submission viola un marchio registrato.
> - I metadati della Submission sono fattualmente fuorvianti.
> - Il nome della Submission contiene testo promozionale o descrittivo oltre il nome effettivo del software. Ad esempio, "Digital Paint - Programma di pittura professionale e facile" dovrebbe essere semplicemente "Digital Paint".

**3.3.3.** Non rifiuterai una Submission che compete con i tuoi prodotti o servizi.

**3.3.4.** Applicherai i tuoi criteri di Review in modo coerente e paritario a tutte le Submission.

**3.3.5.** Non richiederai agli sviluppatori di utilizzare toolkit, framework di interfaccia utente, librerie o linguaggi di design specifici come condizione per l'accettazione.

> [!NOTE]
> Il principio 3.3.5. non si applica se:
> - Una Submission utilizza framework deprecati o framework con vulnerabilità di sicurezza note.
> - La Platform è destinata a un'architettura, un ambiente desktop o un hardware specifico che il/i framework o la/le libreria/e utilizzati dalla Submission non supporta/supportano.

**3.3.6.** Non rifiuterai una Submission sulla base della sua complessità percepita, dimensione o portata. Tutto il software che funziona come descritto dal suo sviluppatore è valido, indipendentemente da come è stato implementato.

> [!NOTE]
> Esempi di ragioni non valide per rifiutare una Submission secondo il principio 3.3.6:
> - Rifiutare una Submission perché è un "semplice wrapper" attorno a un altro strumento.
> - Rifiutare una Submission perché è un'app web confezionata per l'uso desktop.
> - Rifiutare una Submission perché ha "troppe poche funzionalità" o "funzionalità minime".
> - Rifiutare una Submission perché il codice sorgente è ritenuto troppo semplice.
>
> Il ruolo di una Platform di distribuzione è distribuire software, non giudicare se il software sia "sufficientemente complesso" per meritare la distribuzione. Gli User sono in grado di decidere autonomamente se un'applicazione sia utile per loro.

**3.3.7.** Non rifiuterai una Submission sulla base degli strumenti o dei metodi utilizzati per scrivere il software, a condizione che il software funzioni come descritto e soddisfi tutti gli altri criteri pubblicati.

> [!NOTE]
> Esempi di ragioni non valide per rifiutare una Submission secondo il principio 3.3.7:
> - Rifiutare una Submission perché il codice è stato scritto con l'ausilio di strumenti di intelligenza artificiale.
> - Rifiutare una Submission perché il codice è stato generato anziché scritto a mano.
> - Rifiutare una Submission perché è stata scritta utilizzando una Platform low-code o no-code.
>
> Una Platform di distribuzione valuta il *software*, non il *processo*. Se il risultato finale è funzionale, sicuro e descritto accuratamente, i mezzi con cui è stato creato sono irrilevanti. I Gatekeeper non sono nella posizione di verificare come ogni riga di codice sia stata scritta, né dovrebbero esserlo.


<h3 id="34-developer-relations">3.4. Relazioni con gli sviluppatori</h3>

**3.4.1.** Avrai un arco temporale dichiarato pubblicamente per rispondere alle Submission degli sviluppatori e rispetterai tale arco temporale.

**3.4.2.** Fornirai un chiaro processo di appello per il software rifiutato o rimosso.

**3.4.3.** Non rimuoverai software attualmente pubblicato senza notificare lo sviluppatore e dargli l'opportunità di affrontare le problematiche riscontrate.

**3.4.4.** Non rifiuterai nuove Submission sulla base di criteri che, se applicati alle Submission esistenti e pubblicate sulla Platform, comporterebbero la rimozione delle Submission esistenti dalla Platform.

> [!NOTE]
> In altre parole, "cambiare idea" riguardo alle regole per le Submission è consentito, ma solo se le Submission esistenti che violano le nuove regole vengono rimosse dalla Platform in conformità con il principio 3.4.3.

<h3 id="35-user-respect">3.5. Rispetto dell'User</h3>

**3.5.1.** Non includerai software aggiuntivo, telemetria o modifiche nei pacchetti distribuiti senza il consenso dello sviluppatore.

**3.5.2.** Rappresenterai accuratamente l'origine del software (sviluppatore originale vs. pacchettizzato dalla comunità).

<h2 id="4-principles-for-users">4. Principi per gli User</h2>
Scegliendo di aderire al Manifesto Friendly, tu, in qualità di User, scegli di aderire ai seguenti principi.

<h3 id="41-respect--communication">4.1. Rispetto e comunicazione</h3>

**4.1.1.** Tratterai gli sviluppatori con rispetto quando segnali bug, richiedi funzionalità o fornisci feedback. Gli sviluppatori di software sono persone, non sportelli di assistenza.

**4.1.2.** Quando segnali un bug, compirai uno sforzo ragionevole per fornire informazioni sufficienti affinché lo sviluppatore possa riprodurre o comprendere il problema (ad es. passaggi per riprodurlo, informazioni di sistema, messaggi di errore).

**4.1.3.** Non lascerai recensioni o valutazioni volte a costringere uno sviluppatore a implementare una funzionalità specifica o a cambiare la direzione del proprio software.

**4.1.4.** Non criticherai, deriderai o sminuirai altri User per la loro scelta di Platform, sistema operativo, software o per il modo in cui scelgono di utilizzarlo.

> [!NOTE]
> Esempi di comportamento che violano il principio 4.1.4:
> - "Dovresti usare Linux invece di Windows."
> - "Perché usi GrapheneOS se poi installi i Play Services?"
> - "I veri sviluppatori non usano VS Code."
> - "Se hai bisogno di un'interfaccia grafica per quello, stai sbagliando."
>
> Il modo in cui una persona sceglie di utilizzare i propri dispositivi e software è affar suo. Giudizi non richiesti sulle scelte di un altro User non sono costruttivi e non hanno posto in una comunità sana.

<h3 id="42-good-faith">4.2. Buona fede</h3>

**4.2.1.** Non tenterai deliberatamente di sfruttare, decompilare o aggirare le misure di sicurezza del software per scopi malevoli.

**4.2.2.** Rispetterai la licenza secondo cui il software è distribuito.

**4.2.3.** Non rappresenterai in modo errato i bug, non fabbricherai problemi e non presenterai segnalazioni fraudolente contro uno sviluppatore o il suo software.

<h3 id="43-expectations">4.3. Aspettative</h3>

**4.3.1.** Riconosci che il software open-source è spesso sviluppato su base volontaria e che gli sviluppatori non sono obbligati a implementare richieste di funzionalità, rispondere immediatamente o fornire supporto illimitato.

**4.3.2.** Riconosci che il software può contenere bug e che l'esistenza di un bug non è, di per sé, prova di negligenza o incompetenza da parte dello sviluppatore.

<h2 id="5-definitions">5. Definizioni</h2>

<a id="def-1"></a>**<sup>1</sup> Software Developer.** Qualsiasi individuo o organizzazione che crea, mantiene o distribuisce software. Ciò include sviluppatori indipendenti, contributori open-source, aziende di software commerciale e qualsiasi altra parte responsabile dello sviluppo o della manutenzione continuativa di un prodotto software.

<a id="def-2"></a>**<sup>2</sup> Gatekeeper.** Qualsiasi individuo, organizzazione o piattaforma che controlla o influenza la distribuzione di software agli utenti finali. Ciò include, a titolo esemplificativo e non esaustivo, operatori di app store, manutentori di repository di pacchetti, manutentori di distribuzioni e qualsiasi parte che esamina, approva o rifiuta le proposte di pubblicazione software per conto di una piattaforma di distribuzione.

<a id="def-3"></a>**<sup>3</sup> User.** Qualsiasi individuo che installa, utilizza o interagisce in altro modo con il software distribuito attraverso una piattaforma. Ciò include gli utenti finali, gli amministratori di sistema che installano software per conto di altri e qualsiasi persona che interagisce con una comunità software (ad es. presentando segnalazioni di bug, lasciando recensioni o partecipando a forum).

<a id="def-4"></a>**<sup>4</sup> Platform.** Qualsiasi sistema, servizio o infrastruttura utilizzato per distribuire software agli utenti. Ciò include app store, repository di pacchetti, cataloghi software e qualsiasi altro meccanismo attraverso cui il software è reso disponibile per il download o l'installazione.

<a id="def-5"></a>**<sup>5</sup> Submission.** Una richiesta da parte di un Software Developer di avere il proprio software elencato, pubblicato o altrimenti reso disponibile su una Platform. Ciò include le proposte iniziali, gli aggiornamenti al software esistente e le nuove proposte successive a un rifiuto.

<a id="def-6"></a>**<sup>6</sup> Review.** Il processo attraverso il quale un Gatekeeper valuta una Submission rispetto ai criteri pubblicati prima di accettarla o rifiutarla.

<a id="def-7"></a>**<sup>7</sup> Dark Patterns.** Scelte di progettazione dell'interfaccia utente deliberatamente concepite per ingannare, manipolare o costringere gli utenti a compiere azioni che non sono nel loro interesse. Esempi includono opt-out nascosti, continuità forzata, pubblicità mascherata e tattiche di esca e scambio.
