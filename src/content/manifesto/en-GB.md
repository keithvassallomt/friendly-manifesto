---
title: "The Friendly Manifesto"
version: "1.0"
date: "11th March 2026"
lang: "en-GB"
langLabel: "English (UK)"
description: "A voluntary set of principles for open-source Software Developers, Gatekeepers, and Users."
---

## TL;DR

The Friendly Manifesto is a voluntary set of principles which open-source Software Developers[<sup>1</sup>](#def-1), Gatekeepers[<sup>2</sup>](#def-2) and Users[<sup>3</sup>](#def-3) can choose to adhere to.

In summary:
- **Software Developers** commit to building honest, secure, and respectful software that does not exploit its Users.
- **Gatekeepers** commit to distributing software fairly, transparently, and without subjective or ideological gatekeeping.
- **Users** commit to engaging with developers and communities respectfully, in good faith, and with realistic expectations.

## Table of Contents

- [1. Preface](#1-preface)
- [2. Principles for Software Developers](#2-principles-for-software-developers)
  - [2.1. Security & Quality](#21-security--quality)
  - [2.2. Privacy & Transparency](#22-privacy--transparency)
  - [2.3. User Respect](#23-user-respect)
  - [2.4. Licensing & Honesty](#24-licensing--honesty)
  - [2.5. Predatory Practices](#25-predatory-practices)
  - [2.6. Access for Everyone](#26-access-for-everyone)
- [3. Principles for Gatekeepers](#3-principles-for-gatekeepers)
  - [3.1. Transparency & Communication](#31-transparency--communication)
  - [3.2. Security & Privacy](#32-security--privacy)
  - [3.3. Fairness & Objectivity](#33-fairness--objectivity)
  - [3.4. Developer Relations](#34-developer-relations)
  - [3.5. User Respect](#35-user-respect)
- [4. Principles for Users](#4-principles-for-users)
  - [4.1. Respect & Communication](#41-respect--communication)
  - [4.2. Good Faith](#42-good-faith)
  - [4.3. Expectations](#43-expectations)
- [5. Definitions](#5-definitions)

## 1. Preface

The open-source movement has fundamentally changed how software is built, shared, and used. What began as a philosophy of collaboration and freedom has grown into an ecosystem that powers much of the modern world, from operating systems and web browsers to the infrastructure behind the largest services on the internet.

Yet as this ecosystem has grown, so too have the structures around it. Gatekeepers -- app stores, package repositories, software catalogues -- have become the primary means by which Users discover and install software. These Platforms serve a valuable purpose: they provide trust, convenience, and discoverability. But they also hold significant power. The decision to accept or reject a piece of software, to promote it or bury it, to apply rules consistently or selectively, is a decision that directly affects the livelihoods and reputations of the developers who build it and the choices available to the Users who depend on it.

The relationship between Software Developers and their Users has the potential to be one of the most productive in technology -- developers building something useful, and Users helping to shape and improve it. But without a shared understanding of what each side can reasonably expect from the other, that relationship can break down. What is missing is not goodwill, but a common framework for expressing it.

The Friendly Manifesto exists to address this gap. It is a voluntary set of principles for three groups -- Software Developers, Gatekeepers, and Users -- that defines what it means to participate in the open-source ecosystem in good faith. It is not a licence. It is not a legal contract. It is not enforceable by any authority. It is simply a public commitment: a way for individuals and organisations to say, "This is how we choose to operate, and we invite you to hold us to it."

Adherence to this manifesto is entirely voluntary. No one is obligated to adopt it, and no one should be penalised for choosing not to. But by adopting it, you are choosing to be part of a community that values transparency, fairness, and mutual respect -- and you are giving others a clear standard against which to measure that commitment.

## 2. Principles for Software Developers
By choosing to adhere to the Friendly Manifesto, you, as a Software Developer, are choosing to adhere to the following principles.

### 2.1. Security & Quality

**2.1.1.** You will not knowingly distribute software that contains malware, spyware or code designed to harm Users or their systems.

**2.1.2.** You will make reasonable efforts to address reported security vulnerabilities in a timely manner.

**2.1.3.** You will accurately describe what your software does on any Platform[<sup>4</sup>](#def-4) where it is distributed, including your own Platform (such as your own website or public code repository). This includes the distribution metadata, and includes description, screenshots and permissions.

**2.1.4.** You will accurately describe what changes a new version of your software contains. For example, simply labelling a new version of your software with "performance and bug fixes" is not permissible.

### 2.2. Privacy & Transparency

**2.2.1.** You will be transparent about what data your software collects, if any, and for what purpose.

**2.2.2.** You will not collect User data beyond what is necessary for the software to function, unless the User explicitly opts in.

**2.2.3.** Further to principle 2.2.2., any interaction where the User can choose to subscribe to receiving messaging from the developer must be opted-out by default, unless the messaging is deemed critical to the continued functionality of the product or security and privacy of the User.

**2.2.4.** Further to principle 2.2.3., any messaging which to which the user is subscribed by default must only be used for the specific purposes mentioned in principle 2.2.3. No other communication (e.g. marketing, news, offers and so on) may be sent using this channel.

### 2.3. User Respect

**2.3.1.** You will not intentionally degrade or limit the functionality of your software on specific Platforms, distributions, or desktop environments.

**2.3.2.** You will provide a reasonable way for Users to report bugs or request support (if the latter is offered). This may include an issue tracker, email, forum or similar.

**2.3.3.** Further to principle 2.3.2., any forum provided for bug reports or technical support must be asynchronous in nature. In principle, this means that group chats or public chatrooms are not considered an acceptable issue tracking or bug report mechanism if used exclusively.

> [!NOTE]
> Principle 2.3.3. may at first seem draconian. However, note that it does not forbid the use of group chats or chatrooms for support/bugs. It does, however, state that this cannot be the **only** official support channel. Users should not be expected to be interacting with the developer in real time, especially considering differences in timezones. Users should also not have to search through copious amounts of unstructured content unrelated to their issue in order to follow a conversation thread regarding their issue.

**2.3.4.** You will conduct all interactions with your Users in a professional and respectful manner, regardless of circumstances.

> [!NOTE]
> Examples of behaviour that violates principle 2.3.4:
> - Dismissing, belittling, or mocking a User for filing a bug report or asking for help.
> - Closing bug reports with hostile or sarcastic responses (e.g. "works for me", "not a bug", "learn to read", "won't fix").
> - Retaliating against a User who left a negative but honest review of your software.
> - Making personal attacks against a User based on their skill level, background, or employer.
>
> Users who take the time to report a bug or provide feedback are contributing to the improvement of your software. Treat them accordingly.


### 2.4. Licensing & Honesty

**2.4.1.** You will ensure your software's stated license accurately reflects the terms under which it is distributed.

**2.4.2.** You will not misrepresent your software's origin, authorship, or affiliation.

### 2.5. Predatory Practices

**2.5.1.** You will not design your software to exploit psychological vulnerabilities, addictive patterns, or Dark Patterns[<sup>7</sup>](#def-7) to manipulate User behaviour (e.g. artificial urgency, forced continuity, hidden costs, deliberately confusing opt-out flows).

**2.5.2.** You will not gate previously free functionality behind a paywall without reasonable notice to existing Users.

**2.5.3.** You will not use misleading notifications, fake system alerts, or deceptive UI elements designed to trick Users into performing actions they did not intend.

**2.5.4.** If your software offers a free tier or trial, you will clearly communicate the limitations and any transition to paid service before the User commits time or data to the Platform.

**2.5.5.** You will not make it deliberately harder to uninstall, deactivate, or stop using your software than it was to install or activate it.

**2.5.6.** You will not implement loot boxes, gacha mechanics, or any similar mechanism where the User pays for randomised rewards with uncertain value.

**2.5.7.** You will not market, advertise, or promote in-app purchases, microtransactions, or paid content to Users under the legal age of consent in the User's jurisdiction.

**2.5.8.** If your software is offered on a subscription basis, you will publish a roadmap outlining the estimated frequency and scope of new or improved functionality that subscribers can expect during their subscription period.

> [!NOTE]
> Principle 2.5.8. does not apply if the subscription is primarily for the maintenance of an ongoing service (e.g. a backend, API, cloud storage, or server infrastructure) rather than for the delivery of new software features.

**2.5.9.** You will make reasonable efforts to price your software and any associated subscriptions based on the genuine value delivered to Users, rather than on market dominance, artificial scarcity, or the absence of alternatives.

> [!NOTE]
> Principle 2.5.9. is intentionally aspirational rather than prescriptive. It is not possible to objectively define "fair pricing." However, by adhering to this principle, you are signalling to your Users that your pricing reflects a good-faith assessment of value, not an exploitation of your market position. Developers are encouraged to be transparent about their pricing rationale when possible.

### 2.6. Access for Everyone

**2.6.1.** You will make reasonable efforts to ensure your software is accessible to Users with disabilities, including but not limited to compatibility with screen readers, keyboard-only navigation, and sufficient colour contrast.

**2.6.2.** You will make reasonable efforts to make your software available in multiple languages.

> [!NOTE]
> Principles 2.6.1. and 2.6.2. acknowledge that not every developer has the resources to implement full accessibility or localisation support themselves. However, at a minimum, you should design and structure your software in a way that allows others to contribute accessibility improvements and translations. For example, using standard accessibility APIs, externalising user-facing strings, and accepting community contributions for translations.

## 3. Principles for Gatekeepers
By choosing to adhere to the Friendly Manifesto, you, as a Gatekeeper, are choosing to adhere to the following principles.

### 3.1. Transparency & Communication

**3.1.1.** You will make it clear to your users whether your Platform actively Reviews[<sup>6</sup>](#def-6) submitted software, and to what extent (e.g. security audits, automated scanning, manual Review, no Review).

**3.1.2.** You will be transparent about your acceptance/rejection criteria and publish them publicly.

**3.1.3.** You will provide clear, actionable feedback when requesting changes to a Submission[<sup>5</sup>](#def-5).

**3.1.4.** Any rejection of a Submission must include a written explanation citing the specific Review criteria or principle that the Submission violates. A rejection without justification is not valid.

> [!NOTE]
> A one-word or otherwise unexplained rejection (e.g. "no", "rejected", "not suitable") is not considered valid under this principle. The developer has invested time in preparing and submitting their software; they are entitled to know *why* it was rejected, with reference to specific, published criteria (see principle 3.1.2).

**3.1.5.** You will conduct all interactions with developers in a professional and respectful manner, regardless of circumstances.

> [!NOTE]
> Examples of behaviour that violates principle 3.1.5:
> - Providing dismissive, rude, or hostile feedback on a Submission due to workload, time pressure, or personal frustration.
> - Treating a developer's Submission unfairly due to a prior disagreement or personal conflict with the developer.
> - Making personal attacks against a developer, including remarks about their employer, background, or character.
> - Using your position as a reviewer to settle personal grievances or exert authority beyond the scope of the Review.
>
> A Review is a Review of the software, not a judgement of the person who wrote it.


### 3.2. Security & Privacy

> [!NOTE]
> This section does not apply if, in accordance with principle 3.1.1, your Platform discloses that it does not Review submitted software and therefore allows all Submissions.

**3.2.1.** You will, to the best of your abilities, not distribute software that has known critical security vulnerabilities.

**3.2.2.** You will, to the best of your abilities, not distribute software that is known to intentionally violate User privacy for commercial gain or otherwise.

**3.2.3.** You will have a reasonable disclosure process for reporting security issues in software you distribute.

### 3.3. Fairness & Objectivity

**3.3.1.** You agree that the purpose of a distribution Platform is to distribute and promote the software distributed on it, and not to create an ideological walled garden.

**3.3.2.** You will not reject software based on subjective aesthetic preferences.

> [!NOTE]
> Examples of invalid aesthetic reasons to reject a Submission as per principle 3.3.2:
> - Rejecting a Submission because you do not like the logo.
> - Rejecting a Submission because you do not like how the name of the software is formatted (e.g. rejecting a Submission because the name is 'DigitalPaint' rather than 'Digital Paint' or 'Digitalpaint').
> - Rejecting a Submission because you do not like the colour scheme it uses.
> - Rejecting a Submission because it does not use a particular design language, colour palette or theme.
> - Rejecting a Submission for using a non-standard window layout.
> - Rejecting a Submission because it uses custom widgets rather than Platform-native ones.

> [!TIP]
> Examples of permissible aesthetic reasons to reject a Submission:
> - The logo or name of the Submission is designed to impersonate another application or mislead Users.
> - The logo of the Submission contains offensive or illegal imagery.
> - The name of the Submission infringes a registered trademark.
> - The Submission's metadata is factually misleading.
> - The Submission's name contains promotional or descriptive text beyond the actual name of the software. For example, "Digital Paint - Professional and easy painting program" should simply be "Digital Paint."

**3.3.3.** You will not reject a Submission that competes with your own products or services.

**3.3.4.** You will apply your Review criteria consistently and equally to all Submissions.

**3.3.5.** You will not require developers to use specific toolkits, User Interface frameworks, libraries or design languages as a condition for acceptance.

> [!NOTE]
> Principle 3.3.5. does not apply if:
> - A Submission uses deprecated frameworks or frameworks with known security vulnerabilities.
> - The Platform targets a specific architecture, desktop environment, or hardware that the framework(s) or library(ies) used by the Submission does not support.

**3.3.6.** You will not reject a Submission based on its perceived complexity, size, or scope. All software that functions as described by its developer is valid, regardless of how it is implemented.

> [!NOTE]
> Examples of invalid reasons to reject a Submission under principle 3.3.6:
> - Rejecting a Submission because it is a "simple wrapper" around another tool.
> - Rejecting a Submission because it is a web app packaged for desktop use.
> - Rejecting a Submission because it has "too few features" or "minimal functionality."
> - Rejecting a Submission because the source code is deemed too simple.
>
> The role of a distribution Platform is to distribute software, not to judge whether software is "complex enough" to deserve distribution. Users are capable of deciding for themselves whether an application is useful to them.

**3.3.7.** You will not reject a Submission based on the tools or methods used to write the software, provided the software functions as described and meets all other published criteria.

> [!NOTE]
> Examples of invalid reasons to reject a Submission under principle 3.3.7:
> - Rejecting a Submission because the code was written with the assistance of AI tools.
> - Rejecting a Submission because the code was generated rather than hand-written.
> - Rejecting a Submission because it was written using a low-code or no-code Platform.
>
> A distribution Platform Reviews *software*, not *process*. If the end result is functional, safe, and accurately described, the means by which it was created is irrelevant. Gatekeepers are not in a position to audit how every line of code was written, nor should they be.


### 3.4. Developer Relations

**3.4.1.** You will have a publicly stated timeframe for responding to developer Submissions and will adhere to this timeframe.

**3.4.2.** You will provide a clear appeals process for rejected or removed software.

**3.4.3.** You will not remove currently published software without notifying the developer and giving them an opportunity to address concerns.

**3.4.4.** You will not reject new Submissions based on criteria which, if applied to existing published Submissions available on that Platform, would result in the existing Submissions being removed from the Platform.

> [!NOTE]
> In other words, "changing your mind" about the rules for Submissions is allowed, but only if existing Submissions which violate the new rules are removed from the Platform in accordance with principle 3.4.3.

### 3.5. User Respect

**3.5.1.** You will not bundle additional software, telemetry, or modifications into distributed packages without the developer's consent.

**3.5.2.** You will accurately represent the software's origin (original developer vs. community packaged).

## 4. Principles for Users
By choosing to adhere to the Friendly Manifesto, you, as a User, are choosing to adhere to the following principles.

### 4.1. Respect & Communication

**4.1.1.** You will treat developers with respect when reporting bugs, requesting features, or providing feedback. Software developers are people, not service desks.

**4.1.2.** When reporting a bug, you will make a reasonable effort to provide enough information for the developer to reproduce or understand the issue (e.g. steps to reproduce, system information, error messages).

**4.1.3.** You will not leave Reviews or ratings intended to coerce a developer into implementing a specific feature or changing the direction of their software.

**4.1.4.** You will not criticise, mock, or belittle other Users for their choice of Platform, operating system, software, or how they choose to use it.

> [!NOTE]
> Examples of behaviour that violates principle 4.1.4:
> - "You should be using Linux instead of Windows."
> - "Why are you even using GrapheneOS if you're going to install Play Services?"
> - "Real developers don't use VS Code."
> - "If you need a GUI for that, you're doing it wrong."
>
> How a person chooses to use their own devices and software is their own business. Unsolicited judgement about another User's choices is not constructive and has no place in a healthy community.

### 4.2. Good Faith

**4.2.1.** You will not deliberately attempt to exploit, reverse-engineer, or circumvent security measures in software for malicious purposes.

**4.2.2.** You will respect the license under which the software is distributed.

**4.2.3.** You will not misrepresent bugs, fabricate issues, or file fraudulent reports against a developer or their software.

### 4.3. Expectations

**4.3.1.** You acknowledge that open-source software is often developed voluntarily and that developers are not obligated to implement feature requests, respond immediately, or provide unlimited support.

**4.3.2.** You acknowledge that software may have bugs and that the existence of a bug is not, in itself, evidence of negligence or incompetence on the part of the developer.

## 5. Definitions

<a id="def-1"></a>**<sup>1</sup> Software Developer.** Any individual or organisation that creates, maintains, or distributes software. This includes independent developers, open-source contributors, commercial software companies, and any other party responsible for the development or ongoing maintenance of a software product.

<a id="def-2"></a>**<sup>2</sup> Gatekeeper.** Any individual, organisation, or platform that controls or influences the distribution of software to end users. This includes, but is not limited to, app store operators, package repository maintainers, distribution maintainers, and any party that reviews, approves, or rejects software submissions on behalf of a distribution platform.

<a id="def-3"></a>**<sup>3</sup> User.** Any individual who installs, uses, or otherwise interacts with software distributed through a platform. This includes end users, system administrators installing software on behalf of others, and any person who engages with a software community (e.g. by filing bug reports, leaving reviews, or participating in forums).

<a id="def-4"></a>**<sup>4</sup> Platform.** Any system, service, or infrastructure used to distribute software to users. This includes app stores, package repositories, software catalogues, and any other mechanism through which software is made available for download or installation.

<a id="def-5"></a>**<sup>5</sup> Submission.** A request by a Software Developer to have their software listed, published, or otherwise made available on a Platform. This includes initial submissions, updates to existing software, and re-submissions following a rejection.

<a id="def-6"></a>**<sup>6</sup> Review.** The process by which a Gatekeeper evaluates a Submission against published criteria before accepting or rejecting it.

<a id="def-7"></a>**<sup>7</sup> Dark Patterns.** User interface design choices that are deliberately crafted to trick, manipulate, or coerce users into performing actions that are not in their best interest. Examples include hidden opt-outs, forced continuity, disguised advertisements, and bait-and-switch tactics.
