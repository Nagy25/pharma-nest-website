# Pharma Nest privacy readiness

Review date: **24 October 2026**. Owner/developer: **Ahmed Nagy**. Privacy and deletion contact: **ahmednagyhero25@gmail.com**.

This is an internal release checklist, not a compliance certificate. This change updates only the public policy page, its styling, and these notes. It does not change the mobile app, deletion implementation, store declarations, or hosting.

## Completed in this change

- [x] Plain-language English and Arabic describe the same practices, including account information, pharmacy records, notification delivery, device/app identifiers, automatic crash reports, and selected exports.
- [x] Public copy omits named infrastructure providers and internal implementation details. Service-provider access is disclosed by purpose, rather than claiming that information is never shared.
- [x] App identity, privacy email, retention, security, international processing, notification choices, children, policy changes, and email deletion instructions are included. The public page identifies Pharma Nest without naming its individual developer, as requested.
- [x] No invented deletion deadline; signing out/uninstalling does not delete the account. Retention exceptions require a necessary reason and consideration of removing personal details from shared records.
- [x] Crash diagnostics normally remain for 90 days before the provider begins removal. This is not a promise of completed deletion within 90 days and does not describe retention of other records.
- [x] Existing `privacy-policy.html`, `#english`, `#arabic`, and the landing footer link are retained. New direct request links: `privacy-policy.html#delete-account` and `privacy-policy.html#delete-account-ar`.
- [x] Both languages are ordinary HTML and require no JavaScript. Local logo/fonts, shared brand styles, scoped privacy styles and print rules are used.

## Required before store submission

- [ ] **Released-build discrepancy:** standard automatic Firebase Crashlytics reporting was confirmed by the owner, but Crashlytics usage was absent from the reviewed application source. Inspect the actual released Android and iOS builds and their build configuration. Confirm the provider/version, automatic collection, default diagnostic fields and installation identifiers. The policy currently follows the owner's confirmation. Custom account identifiers, pharmacy-record logging, advertising, and additional analytics are not represented as enabled. If the released build differs, reconcile the policy and declarations before submission.
- [ ] **Public policy URL:** after a separately authorized deployment, verify the existing HTTPS policy URL loads without login, geographic restrictions or a download. Test English/Arabic, request anchors and email links on a phone and from an independent connection. Use that exact policy URL in Google Play Console and App Store Connect; no deployed URL was changed or certified here.
- [ ] **In-app policy access:** verify an easily accessible policy link in the released app. No link was found in the reviewed source, and this change adds none. Both stores require accessible in-app policy access as well as store metadata. Record where reviewers can find it.
- [ ] **Google Data Safety and Apple App Privacy:** audit actual transmissions, including embedded providers, then reconcile the submitted forms with this policy. The forms were not inspected or changed here. Do not answer “no data collected” simply because accounts are provisioned or records belong to a pharmacy.
- [ ] **Account deletion scope:** confirm all account-creation/onboarding routes, including accounts created outside the app. Assess the applicable Google/Apple account-deletion requirements against the released flows. An email request page alone does not establish that any required in-app initiation or deletion functionality is satisfied. Check whether a separate deletion URL is required by the store and, where applicable, use the direct request anchor above.
- [ ] **Deletion operations:** verify that the mailbox is monitored, requests can be verified without passwords, pharmacy coordination does not unnecessarily prevent valid requests, and account/associated personal data can actually be deleted. Include relevant service providers and backups. Identify any justified record-retention categories and reasons, keep them only as necessary, and communicate exceptions and completion. Do not treat account suspension or every pharmacy business record as a blanket deletion exception.
- [ ] **Provider protections/security:** confirm actual access controls, protected device storage, encrypted connections, provider terms and international-processing safeguards support the public statements. Provider access is purpose-limited; do not imply that removing provider names removes the need to assess their practices.
- [ ] **Notification/permission behaviour:** verify notification settings on both platforms and how permissions can be withdrawn. The policy does not promise an in-app crash-reporting switch. If any additional prominent disclosure/consent is required for the actual collection, implement and verify it separately.

## Disclosure reconciliation worksheet

These are review prompts, not final store-console classifications. Apply each store's current definitions, including exceptions for processing on behalf of the app and user-initiated sharing. Verify whether data is linked to identity, optional/required, retained or shared; do not infer these answers only from the policy wording.

| Information | Purpose disclosed | Store audit focus |
| --- | --- | --- |
| Username/phone, account identifier and sign-in information | Account access, support, security | Contact information/user identifiers; association with account and pharmacy |
| Stock/expiry, suppliers, shifts, invoices, reports, order quantities and staff attribution | Pharmacy operations and order management | Relevant user content/business records, financial information where applicable, and personal fields actually transmitted |
| Optional recipient phone, order notes and selected exports | Preparing and sharing orders/reports | Contact information/content; distinguish app storage from external recipients selected by the user |
| Installation/platform information for notifications | Notification delivery | Device or other identifiers; account association and permissions |
| Automatic crash details, timestamps, app/device/OS information, installation identifiers | Diagnosing crashes | Crash data/diagnostics and device or other identifiers; verify linkage, enabled defaults, and any unexpected additional collection |
| Local preferences/session and provider connection metadata | Preferences, session continuity, service operation/security | Distinguish on-device-only information from off-device collection; inspect provider processing |

No advertising or cross-company advertising tracking is disclosed. Do not add an advertising/tracking declaration or claim “no analytics of any kind” without auditing the released build. Do not submit this worksheet as completed store forms.

## Official references checked

- [Google Play User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en): policy availability and disclosures, Data Safety consistency and account-deletion requirements.
- [Apple App Review Guidelines — Privacy, section 5.1.1](https://developer.apple.com/app-store/review/guidelines/#privacy): accessible policy, data purposes/recipients, retention/deletion and account-related requirements.
- [Firebase Privacy and Security](https://firebase.google.com/support/privacy): Crashlytics diagnostic information and the normal 90-day period before removal begins. This provider name belongs in these internal verification notes, not the public policy.

The rewritten policy supports submission preparation. Full store readiness still depends on the released app, actual data practices, accessible links, operational deletion process and accurate console disclosures.

## Local validation record — 24 October 2026

- Passed structural checks: unique IDs, all contents/language/deletion destinations, local asset paths, email destinations, 20 bilingual sections, date and 90-day wording, no scripts or removed provider/implementation names in the public policy, unchanged homepage footer URL.
- Visually reviewed at 1280px desktop and 390px/320px phone widths. Document width matched viewport width; Arabic direction was RTL. Local fonts and logo loaded. Checked language and deletion navigation, readable wrapping and visible keyboard focus. Email targets were inspected without sending mail.
- Reviewed both languages section by section for matching practices. Both are present in the HTML without script-dependent visibility.
- Print stylesheet reviewed: removes navigation/contents, removes gradients, preserves both languages, begins Arabic on a new page and applies readable black text with heading/widow/orphan controls. Actual paginated printer/PDF output was not rendered in this environment; inspect print preview before publishing if a printed policy is required.
- Deployment/public accessibility, the mailbox workflow, released binaries and console forms remain unverified, as listed above.

## Presentation revision — 24 October 2026

Removed the introductory gradient banner and the individual developer name from both public language versions and the footer at the owner’s request. Pharma Nest remains the policy identity; effective dates and privacy/deletion email remain in the document.
