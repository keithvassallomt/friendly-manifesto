---
title: "Le Manifeste Friendly"
version: "1.0"
date: "11 mars 2026"
lang: "fr-FR"
langLabel: "Français"
description: "Un ensemble volontaire de principes pour les Software Developers (développeurs de logiciels), les Gatekeepers (gardiens) et les Users (utilisateurs) de l'open source."
---

<h2 id="tldr">TL;DR</h2>

Le Manifeste Friendly est un ensemble volontaire de principes auxquels les Software Developers[<sup>1</sup>](#def-1) (développeurs de logiciels), les Gatekeepers[<sup>2</sup>](#def-2) (gardiens) et les Users[<sup>3</sup>](#def-3) (utilisateurs) de l'open source peuvent choisir d'adhérer.

En résumé :
- Les **Software Developers** s'engagent à créer des logiciels honnêtes, sécurisés et respectueux, qui n'exploitent pas leurs Users.
- Les **Gatekeepers** s'engagent à distribuer les logiciels de manière équitable, transparente et sans filtrage subjectif ou idéologique.
- Les **Users** s'engagent à interagir avec les développeurs et les communautés de manière respectueuse, de bonne foi et avec des attentes réalistes.

<h2 id="table-of-contents">Table des matières</h2>

- [1. Préface](#1-preface)
- [2. Principes pour les Software Developers](#2-principles-for-software-developers)
  - [2.1. Sécurité et qualité](#21-security--quality)
  - [2.2. Confidentialité et transparence](#22-privacy--transparency)
  - [2.3. Respect des Users](#23-user-respect)
  - [2.4. Licences et honnêteté](#24-licensing--honesty)
  - [2.5. Pratiques prédatrices](#25-predatory-practices)
  - [2.6. Accès pour tous](#26-access-for-everyone)
- [3. Principes pour les Gatekeepers](#3-principles-for-gatekeepers)
  - [3.1. Transparence et communication](#31-transparency--communication)
  - [3.2. Sécurité et confidentialité](#32-security--privacy)
  - [3.3. Équité et objectivité](#33-fairness--objectivity)
  - [3.4. Relations avec les développeurs](#34-developer-relations)
  - [3.5. Respect des Users](#35-user-respect)
- [4. Principes pour les Users](#4-principles-for-users)
  - [4.1. Respect et communication](#41-respect--communication)
  - [4.2. Bonne foi](#42-good-faith)
  - [4.3. Attentes](#43-expectations)
- [5. Définitions](#5-definitions)

<h2 id="1-preface">1. Préface</h2>

Le mouvement open source a fondamentalement transformé la manière dont les logiciels sont créés, partagés et utilisés. Ce qui a commencé comme une philosophie de collaboration et de liberté est devenu un écosystème qui alimente une grande partie du monde moderne, des systèmes d'exploitation et navigateurs web à l'infrastructure sous-jacente des plus grands services sur Internet.

Pourtant, à mesure que cet écosystème s'est développé, les structures qui l'entourent se sont également renforcées. Les Gatekeepers -- les boutiques d'applications, les dépôts de paquets, les catalogues de logiciels -- sont devenus le principal moyen par lequel les Users découvrent et installent des logiciels. Ces Platforms (plateformes) remplissent un rôle précieux : elles offrent confiance, commodité et visibilité. Mais elles détiennent également un pouvoir considérable. La décision d'accepter ou de rejeter un logiciel, de le promouvoir ou de l'enfouir, d'appliquer les règles de manière cohérente ou sélective, est une décision qui affecte directement les moyens de subsistance et la réputation des développeurs qui le créent, ainsi que les choix offerts aux Users qui en dépendent.

La relation entre les Software Developers et leurs Users a le potentiel d'être l'une des plus productives dans le domaine de la technologie -- les développeurs créant quelque chose d'utile, et les Users contribuant à le façonner et à l'améliorer. Mais sans une compréhension partagée de ce que chaque partie peut raisonnablement attendre de l'autre, cette relation peut se détériorer. Ce qui manque n'est pas la bonne volonté, mais un cadre commun pour l'exprimer.

Le Manifeste Friendly existe pour combler cette lacune. Il s'agit d'un ensemble volontaire de principes pour trois groupes -- les Software Developers, les Gatekeepers et les Users -- qui définit ce que signifie participer à l'écosystème open source de bonne foi. Ce n'est pas une licence. Ce n'est pas un contrat juridique. Il n'est exécutoire par aucune autorité. C'est simplement un engagement public : une manière pour les individus et les organisations de déclarer « Voici comment nous choisissons de fonctionner, et nous vous invitons à nous y tenir. »

L'adhésion à ce manifeste est entièrement volontaire. Personne n'est obligé de l'adopter, et personne ne devrait être pénalisé pour avoir choisi de ne pas le faire. Mais en l'adoptant, vous choisissez de faire partie d'une communauté qui valorise la transparence, l'équité et le respect mutuel -- et vous donnez aux autres un standard clair par rapport auquel mesurer cet engagement.

<h2 id="2-principles-for-software-developers">2. Principes pour les Software Developers</h2>
En choisissant d'adhérer au Manifeste Friendly, vous, en tant que Software Developer, choisissez d'adhérer aux principes suivants.

<h3 id="21-security--quality">2.1. Sécurité et qualité</h3>

**2.1.1.** Vous ne distribuerez pas sciemment de logiciel contenant des malwares, des spywares ou du code conçu pour nuire aux Users ou à leurs systèmes.

**2.1.2.** Vous ferez des efforts raisonnables pour corriger les vulnérabilités de sécurité signalées dans un délai approprié.

**2.1.3.** Vous décrirez fidèlement ce que fait votre logiciel sur toute Platform[<sup>4</sup>](#def-4) où il est distribué, y compris votre propre Platform (comme votre site web ou votre dépôt de code public). Cela inclut les métadonnées de distribution, notamment la description, les captures d'écran et les permissions.

**2.1.4.** Vous décrirez fidèlement les changements contenus dans une nouvelle version de votre logiciel. Par exemple, simplement étiqueter une nouvelle version de votre logiciel avec « corrections de performances et de bugs » n'est pas acceptable.

<h3 id="22-privacy--transparency">2.2. Confidentialité et transparence</h3>

**2.2.1.** Vous serez transparent quant aux données que votre logiciel collecte, le cas échéant, et dans quel but.

**2.2.2.** Vous ne collecterez pas de données des Users au-delà de ce qui est nécessaire au fonctionnement du logiciel, sauf si l'User y consent explicitement.

**2.2.3.** En complément du principe 2.2.2., toute interaction où l'User peut choisir de s'abonner à la réception de messages du développeur doit être désactivée par défaut, sauf si les messages sont jugés essentiels au fonctionnement continu du produit ou à la sécurité et la confidentialité de l'User.

**2.2.4.** En complément du principe 2.2.3., tout message auquel l'utilisateur est abonné par défaut ne doit être utilisé que pour les fins spécifiques mentionnées dans le principe 2.2.3. Aucune autre communication (par exemple marketing, actualités, offres, etc.) ne peut être envoyée via ce canal.

<h3 id="23-user-respect">2.3. Respect des Users</h3>

**2.3.1.** Vous ne dégraderez ni ne limiterez intentionnellement les fonctionnalités de votre logiciel sur des Platforms, distributions ou environnements de bureau spécifiques.

**2.3.2.** Vous fournirez un moyen raisonnable aux Users de signaler des bugs ou de demander de l'assistance (si celle-ci est proposée). Cela peut inclure un système de suivi des problèmes, un courriel, un forum ou un moyen similaire.

**2.3.3.** En complément du principe 2.3.2., tout forum fourni pour les rapports de bugs ou le support technique doit être de nature asynchrone. En principe, cela signifie que les discussions de groupe ou les salons de discussion publics ne sont pas considérés comme un mécanisme acceptable de suivi des problèmes ou de rapport de bugs s'ils sont utilisés exclusivement.

> [!NOTE]
> Le principe 2.3.3. peut sembler draconien à première vue. Cependant, notez qu'il n'interdit pas l'utilisation de discussions de groupe ou de salons de discussion pour le support/les bugs. Il stipule toutefois que cela ne peut pas être le **seul** canal de support officiel. Les Users ne devraient pas avoir à interagir avec le développeur en temps réel, notamment en raison des différences de fuseaux horaires. Les Users ne devraient pas non plus avoir à chercher dans de grandes quantités de contenu non structuré sans rapport avec leur problème pour suivre un fil de conversation concernant leur problème.

**2.3.4.** Vous mènerez toutes les interactions avec vos Users de manière professionnelle et respectueuse, quelles que soient les circonstances.

> [!NOTE]
> Exemples de comportements qui violent le principe 2.3.4 :
> - Rejeter, rabaisser ou se moquer d'un User pour avoir soumis un rapport de bug ou demandé de l'aide.
> - Clore des rapports de bugs avec des réponses hostiles ou sarcastiques (par exemple « ça marche chez moi », « ce n'est pas un bug », « apprenez à lire », « ne sera pas corrigé »).
> - Exercer des représailles contre un User qui a laissé un avis négatif mais honnête sur votre logiciel.
> - Attaquer personnellement un User en raison de son niveau de compétence, de son parcours ou de son employeur.
>
> Les Users qui prennent le temps de signaler un bug ou de fournir des commentaires contribuent à l'amélioration de votre logiciel. Traitez-les en conséquence.


<h3 id="24-licensing--honesty">2.4. Licences et honnêteté</h3>

**2.4.1.** Vous vous assurerez que la licence déclarée de votre logiciel reflète fidèlement les conditions sous lesquelles il est distribué.

**2.4.2.** Vous ne déformerez pas l'origine, la paternité ou l'affiliation de votre logiciel.

<h3 id="25-predatory-practices">2.5. Pratiques prédatrices</h3>

**2.5.1.** Vous ne concevrez pas votre logiciel de manière à exploiter les vulnérabilités psychologiques, les comportements addictifs ou les Dark Patterns[<sup>7</sup>](#def-7) (interfaces trompeuses) pour manipuler le comportement des Users (par exemple urgence artificielle, continuité forcée, coûts cachés, processus de désinscription volontairement confus).

**2.5.2.** Vous ne placerez pas des fonctionnalités précédemment gratuites derrière un paywall sans préavis raisonnable aux Users existants.

**2.5.3.** Vous n'utiliserez pas de notifications trompeuses, de fausses alertes système ou d'éléments d'interface trompeurs conçus pour inciter les Users à effectuer des actions qu'ils n'avaient pas l'intention de réaliser.

**2.5.4.** Si votre logiciel propose un niveau gratuit ou une période d'essai, vous communiquerez clairement les limitations et toute transition vers un service payant avant que l'User n'investisse du temps ou des données sur la Platform.

**2.5.5.** Vous ne rendrez pas délibérément plus difficile la désinstallation, la désactivation ou l'arrêt de l'utilisation de votre logiciel par rapport à son installation ou son activation.

**2.5.6.** Vous n'implémenterez pas de loot boxes, de mécanismes gacha ou tout mécanisme similaire où l'User paie pour des récompenses aléatoires de valeur incertaine.

**2.5.7.** Vous ne commercialiserez, n'annoncerez ni ne promouvrez les achats intégrés, les microtransactions ou le contenu payant auprès d'Users n'ayant pas atteint l'âge légal de consentement dans la juridiction de l'User.

**2.5.8.** Si votre logiciel est proposé sur la base d'un abonnement, vous publierez une feuille de route décrivant la fréquence estimée et la portée des fonctionnalités nouvelles ou améliorées auxquelles les abonnés peuvent s'attendre pendant leur période d'abonnement.

> [!NOTE]
> Le principe 2.5.8. ne s'applique pas si l'abonnement concerne principalement la maintenance d'un service en cours (par exemple un backend, une API, du stockage cloud ou une infrastructure serveur) plutôt que la livraison de nouvelles fonctionnalités logicielles.

**2.5.9.** Vous ferez des efforts raisonnables pour fixer le prix de votre logiciel et de tout abonnement associé en fonction de la valeur réelle apportée aux Users, plutôt qu'en fonction d'une position dominante sur le marché, d'une rareté artificielle ou de l'absence d'alternatives.

> [!NOTE]
> Le principe 2.5.9. est intentionnellement aspirationnel plutôt que prescriptif. Il n'est pas possible de définir objectivement un « prix équitable ». Cependant, en adhérant à ce principe, vous signalez à vos Users que votre tarification reflète une évaluation de bonne foi de la valeur, et non une exploitation de votre position sur le marché. Les développeurs sont encouragés à être transparents quant à la logique de leur tarification lorsque cela est possible.

<h3 id="26-access-for-everyone">2.6. Accès pour tous</h3>

**2.6.1.** Vous ferez des efforts raisonnables pour vous assurer que votre logiciel est accessible aux Users en situation de handicap, y compris, mais sans s'y limiter, la compatibilité avec les lecteurs d'écran, la navigation au clavier uniquement et un contraste de couleurs suffisant.

**2.6.2.** Vous ferez des efforts raisonnables pour rendre votre logiciel disponible en plusieurs langues.

> [!NOTE]
> Les principes 2.6.1. et 2.6.2. reconnaissent que tous les développeurs ne disposent pas des ressources nécessaires pour implémenter eux-mêmes une accessibilité ou une localisation complète. Cependant, au minimum, vous devez concevoir et structurer votre logiciel de manière à permettre à d'autres de contribuer aux améliorations d'accessibilité et aux traductions. Par exemple, en utilisant les API d'accessibilité standard, en externalisant les chaînes de caractères visibles par l'utilisateur et en acceptant les contributions communautaires pour les traductions.

<h2 id="3-principles-for-gatekeepers">3. Principes pour les Gatekeepers</h2>
En choisissant d'adhérer au Manifeste Friendly, vous, en tant que Gatekeeper, choisissez d'adhérer aux principes suivants.

<h3 id="31-transparency--communication">3.1. Transparence et communication</h3>

**3.1.1.** Vous indiquerez clairement à vos utilisateurs si votre Platform examine activement (Review[<sup>6</sup>](#def-6)) les logiciels soumis, et dans quelle mesure (par exemple audits de sécurité, analyse automatisée, Review manuelle, aucune Review).

**3.1.2.** Vous serez transparent quant à vos critères d'acceptation/rejet et les publierez publiquement.

**3.1.3.** Vous fournirez des retours clairs et exploitables lorsque vous demandez des modifications à une Submission[<sup>5</sup>](#def-5) (soumission).

**3.1.4.** Tout rejet d'une Submission doit inclure une explication écrite citant le critère de Review spécifique ou le principe que la Submission enfreint. Un rejet sans justification n'est pas valide.

> [!NOTE]
> Un rejet en un mot ou autrement inexpliqué (par exemple « non », « rejeté », « pas adapté ») n'est pas considéré comme valide au titre de ce principe. Le développeur a investi du temps dans la préparation et la soumission de son logiciel ; il est en droit de savoir *pourquoi* il a été rejeté, avec référence à des critères spécifiques et publiés (voir principe 3.1.2).

**3.1.5.** Vous mènerez toutes les interactions avec les développeurs de manière professionnelle et respectueuse, quelles que soient les circonstances.

> [!NOTE]
> Exemples de comportements qui violent le principe 3.1.5 :
> - Fournir des retours dédaigneux, impolis ou hostiles sur une Submission en raison de la charge de travail, de la pression temporelle ou de la frustration personnelle.
> - Traiter la Submission d'un développeur de manière inéquitable en raison d'un désaccord antérieur ou d'un conflit personnel avec le développeur.
> - Attaquer personnellement un développeur, y compris des remarques sur son employeur, son parcours ou son caractère.
> - Utiliser votre position de réviseur pour régler des griefs personnels ou exercer une autorité au-delà de la portée de la Review.
>
> Une Review est une évaluation du logiciel, pas un jugement sur la personne qui l'a écrit.


<h3 id="32-security--privacy">3.2. Sécurité et confidentialité</h3>

> [!NOTE]
> Cette section ne s'applique pas si, conformément au principe 3.1.1, votre Platform indique qu'elle n'examine pas les logiciels soumis et autorise donc toutes les Submissions.

**3.2.1.** Vous ne distribuerez pas, dans la mesure de vos capacités, de logiciel présentant des vulnérabilités de sécurité critiques connues.

**3.2.2.** Vous ne distribuerez pas, dans la mesure de vos capacités, de logiciel connu pour violer intentionnellement la vie privée des Users à des fins commerciales ou autres.

**3.2.3.** Vous disposerez d'un processus raisonnable de divulgation pour signaler les problèmes de sécurité dans les logiciels que vous distribuez.

<h3 id="33-fairness--objectivity">3.3. Équité et objectivité</h3>

**3.3.1.** Vous reconnaissez que la finalité d'une Platform de distribution est de distribuer et de promouvoir les logiciels qui y sont distribués, et non de créer un jardin clos idéologique.

**3.3.2.** Vous ne rejetterez pas un logiciel sur la base de préférences esthétiques subjectives.

> [!NOTE]
> Exemples de raisons esthétiques non valides pour rejeter une Submission conformément au principe 3.3.2 :
> - Rejeter une Submission parce que vous n'aimez pas le logo.
> - Rejeter une Submission parce que vous n'aimez pas la façon dont le nom du logiciel est formaté (par exemple rejeter une Submission parce que le nom est « DigitalPaint » plutôt que « Digital Paint » ou « Digitalpaint »).
> - Rejeter une Submission parce que vous n'aimez pas la palette de couleurs utilisée.
> - Rejeter une Submission parce qu'elle n'utilise pas un langage de design, une palette de couleurs ou un thème particulier.
> - Rejeter une Submission pour l'utilisation d'une disposition de fenêtre non standard.
> - Rejeter une Submission parce qu'elle utilise des widgets personnalisés plutôt que des widgets natifs de la Platform.

> [!TIP]
> Exemples de raisons esthétiques acceptables pour rejeter une Submission :
> - Le logo ou le nom de la Submission est conçu pour usurper l'identité d'une autre application ou induire les Users en erreur.
> - Le logo de la Submission contient des images offensantes ou illégales.
> - Le nom de la Submission enfreint une marque déposée.
> - Les métadonnées de la Submission sont factuellement trompeuses.
> - Le nom de la Submission contient du texte promotionnel ou descriptif au-delà du nom réel du logiciel. Par exemple, « Digital Paint - Programme de peinture professionnel et facile » devrait simplement être « Digital Paint ».

**3.3.3.** Vous ne rejetterez pas une Submission qui concurrence vos propres produits ou services.

**3.3.4.** Vous appliquerez vos critères de Review de manière cohérente et égale à toutes les Submissions.

**3.3.5.** Vous n'exigerez pas des développeurs qu'ils utilisent des boîtes à outils, des frameworks d'interface utilisateur, des bibliothèques ou des langages de design spécifiques comme condition d'acceptation.

> [!NOTE]
> Le principe 3.3.5. ne s'applique pas si :
> - Une Submission utilise des frameworks obsolètes ou des frameworks présentant des vulnérabilités de sécurité connues.
> - La Platform cible une architecture, un environnement de bureau ou un matériel spécifique que le(s) framework(s) ou bibliothèque(s) utilisé(s) par la Submission ne supporte(nt) pas.

**3.3.6.** Vous ne rejetterez pas une Submission en raison de sa complexité perçue, de sa taille ou de sa portée. Tout logiciel qui fonctionne comme décrit par son développeur est valide, quelle que soit la manière dont il est implémenté.

> [!NOTE]
> Exemples de raisons non valides pour rejeter une Submission au titre du principe 3.3.6 :
> - Rejeter une Submission parce qu'il s'agit d'un « simple wrapper » autour d'un autre outil.
> - Rejeter une Submission parce qu'il s'agit d'une application web empaquetée pour une utilisation de bureau.
> - Rejeter une Submission parce qu'elle a « trop peu de fonctionnalités » ou une « fonctionnalité minimale ».
> - Rejeter une Submission parce que le code source est jugé trop simple.
>
> Le rôle d'une Platform de distribution est de distribuer des logiciels, pas de juger si un logiciel est « suffisamment complexe » pour mériter d'être distribué. Les Users sont capables de décider par eux-mêmes si une application leur est utile.

**3.3.7.** Vous ne rejetterez pas une Submission en raison des outils ou méthodes utilisés pour écrire le logiciel, à condition que le logiciel fonctionne comme décrit et respecte tous les autres critères publiés.

> [!NOTE]
> Exemples de raisons non valides pour rejeter une Submission au titre du principe 3.3.7 :
> - Rejeter une Submission parce que le code a été écrit avec l'assistance d'outils d'IA.
> - Rejeter une Submission parce que le code a été généré plutôt qu'écrit manuellement.
> - Rejeter une Submission parce qu'elle a été écrite à l'aide d'une Platform low-code ou no-code.
>
> Une Platform de distribution évalue des *logiciels*, pas des *processus*. Si le résultat final est fonctionnel, sûr et décrit fidèlement, les moyens par lesquels il a été créé sont sans importance. Les Gatekeepers ne sont pas en mesure d'auditer la manière dont chaque ligne de code a été écrite, et ne devraient pas l'être.


<h3 id="34-developer-relations">3.4. Relations avec les développeurs</h3>

**3.4.1.** Vous disposerez d'un délai publiquement annoncé pour répondre aux Submissions des développeurs et vous respecterez ce délai.

**3.4.2.** Vous fournirez un processus d'appel clair pour les logiciels rejetés ou retirés.

**3.4.3.** Vous ne retirerez pas un logiciel actuellement publié sans en informer le développeur et lui donner la possibilité de répondre aux préoccupations.

**3.4.4.** Vous ne rejetterez pas de nouvelles Submissions sur la base de critères qui, s'ils étaient appliqués aux Submissions existantes publiées sur cette Platform, entraîneraient le retrait de ces Submissions de la Platform.

> [!NOTE]
> En d'autres termes, « changer d'avis » sur les règles applicables aux Submissions est autorisé, mais uniquement si les Submissions existantes qui enfreignent les nouvelles règles sont retirées de la Platform conformément au principe 3.4.3.

<h3 id="35-user-respect">3.5. Respect des Users</h3>

**3.5.1.** Vous ne regrouperez pas de logiciels supplémentaires, de télémétrie ou de modifications dans les paquets distribués sans le consentement du développeur.

**3.5.2.** Vous représenterez fidèlement l'origine du logiciel (développeur original vs. empaqueté par la communauté).

<h2 id="4-principles-for-users">4. Principes pour les Users</h2>
En choisissant d'adhérer au Manifeste Friendly, vous, en tant qu'User, choisissez d'adhérer aux principes suivants.

<h3 id="41-respect--communication">4.1. Respect et communication</h3>

**4.1.1.** Vous traiterez les développeurs avec respect lorsque vous signalez des bugs, demandez des fonctionnalités ou fournissez des commentaires. Les développeurs de logiciels sont des personnes, pas des services d'assistance.

**4.1.2.** Lorsque vous signalez un bug, vous ferez un effort raisonnable pour fournir suffisamment d'informations au développeur pour reproduire ou comprendre le problème (par exemple les étapes pour reproduire, les informations système, les messages d'erreur).

**4.1.3.** Vous ne laisserez pas de Reviews ou d'évaluations destinées à contraindre un développeur à implémenter une fonctionnalité spécifique ou à changer la direction de son logiciel.

**4.1.4.** Vous ne critiquerez, ne vous moquerez ni ne rabaissserez d'autres Users pour leur choix de Platform, de système d'exploitation, de logiciel ou pour la manière dont ils choisissent de l'utiliser.

> [!NOTE]
> Exemples de comportements qui violent le principe 4.1.4 :
> - « Vous devriez utiliser Linux au lieu de Windows. »
> - « Pourquoi utilisez-vous GrapheneOS si vous allez installer les Play Services ? »
> - « Les vrais développeurs n'utilisent pas VS Code. »
> - « Si vous avez besoin d'une interface graphique pour ça, vous vous y prenez mal. »
>
> La manière dont une personne choisit d'utiliser ses propres appareils et logiciels ne regarde qu'elle. Les jugements non sollicités sur les choix d'un autre User ne sont pas constructifs et n'ont pas leur place dans une communauté saine.

<h3 id="42-good-faith">4.2. Bonne foi</h3>

**4.2.1.** Vous ne tenterez pas délibérément d'exploiter, de rétro-ingénierer ou de contourner les mesures de sécurité d'un logiciel à des fins malveillantes.

**4.2.2.** Vous respecterez la licence sous laquelle le logiciel est distribué.

**4.2.3.** Vous ne déformerez pas les bugs, ne fabriquerez pas de problèmes et ne déposerez pas de rapports frauduleux contre un développeur ou son logiciel.

<h3 id="43-expectations">4.3. Attentes</h3>

**4.3.1.** Vous reconnaissez que les logiciels open source sont souvent développés de manière bénévole et que les développeurs ne sont pas obligés d'implémenter les demandes de fonctionnalités, de répondre immédiatement ou de fournir une assistance illimitée.

**4.3.2.** Vous reconnaissez que les logiciels peuvent contenir des bugs et que l'existence d'un bug n'est pas, en soi, la preuve d'une négligence ou d'une incompétence de la part du développeur.

<h2 id="5-definitions">5. Définitions</h2>

<a id="def-1"></a>**<sup>1</sup> Software Developer (Développeur de logiciels).** Tout individu ou organisation qui crée, maintient ou distribue des logiciels. Cela inclut les développeurs indépendants, les contributeurs open source, les entreprises de logiciels commerciaux et toute autre partie responsable du développement ou de la maintenance continue d'un produit logiciel.

<a id="def-2"></a>**<sup>2</sup> Gatekeeper (Gardien).** Tout individu, organisation ou plateforme qui contrôle ou influence la distribution de logiciels aux utilisateurs finaux. Cela inclut, sans s'y limiter, les opérateurs de boutiques d'applications, les mainteneurs de dépôts de paquets, les mainteneurs de distributions et toute partie qui examine, approuve ou rejette des soumissions de logiciels au nom d'une plateforme de distribution.

<a id="def-3"></a>**<sup>3</sup> User (Utilisateur).** Tout individu qui installe, utilise ou interagit de quelque manière que ce soit avec un logiciel distribué via une plateforme. Cela inclut les utilisateurs finaux, les administrateurs système installant des logiciels pour le compte d'autres personnes et toute personne qui s'engage dans une communauté logicielle (par exemple en déposant des rapports de bugs, en laissant des avis ou en participant à des forums).

<a id="def-4"></a>**<sup>4</sup> Platform (Plateforme).** Tout système, service ou infrastructure utilisé pour distribuer des logiciels aux utilisateurs. Cela inclut les boutiques d'applications, les dépôts de paquets, les catalogues de logiciels et tout autre mécanisme par lequel les logiciels sont mis à disposition pour téléchargement ou installation.

<a id="def-5"></a>**<sup>5</sup> Submission (Soumission).** Une demande par un Software Developer pour que son logiciel soit répertorié, publié ou autrement rendu disponible sur une Platform. Cela inclut les soumissions initiales, les mises à jour de logiciels existants et les resoumissions suite à un rejet.

<a id="def-6"></a>**<sup>6</sup> Review (Examen).** Le processus par lequel un Gatekeeper évalue une Submission par rapport à des critères publiés avant de l'accepter ou de la rejeter.

<a id="def-7"></a>**<sup>7</sup> Dark Patterns (Interfaces trompeuses).** Des choix de conception d'interface utilisateur délibérément conçus pour tromper, manipuler ou contraindre les utilisateurs à effectuer des actions qui ne sont pas dans leur intérêt. Les exemples incluent les options de désinscription cachées, la continuité forcée, les publicités déguisées et les tactiques d'appât et de substitution.
