// World news summary entry for make.fun news-summary-01 (program/v1, Node 22, standard library only).
// The summary is a fixed constant, so both harness runs write identical bytes.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SUMMARY = `World news, Wednesday 11 November 2026.

Russia and Ukraine agreed the war's largest prisoner swap after US-mediated talks in Abu Dhabi; no deal on land or security, AP and Reuters reported.

Iran hit navigation systems on Oman's Didamar island, Reuters reported; the US charged three men over nearly 20 alleged Iran-backed plots.

Israeli strikes killed at least eight in Gaza as truces frayed, the BBC reported; the US-led Peace Council urged Israel to let aid in after floods.

NATO jets were scrambled twice as suspected drones from Belarus triggered air alerts across Lithuania and shut two airports, LRT reported.

At COP31, UN chief Guterres proposed taxing oil windfalls: the nine biggest firms earned $95bn in a quarter, UN News reported.

House Republicans blocked Pete Hegseth's impeachment, voting 211-204 to send eight articles to committee, Reuters reported.

Nvidia's board moved to oust chief Jensen Huang after reports of two affairs, one with a suspected Chinese spy, the Wall Street Journal reported; shares fell 8.6%.

CoreWeave's revenue rose 168% to $3.66bn, lifting stocks — the S&P 500 gained 1.3% — as gold fell below $4,000, Reuters reported.

Drone strikes hit three more power substations in Sudan, 18 this week, Al Jazeera reported; UNICEF said drones caused two-thirds of child casualties this year.

Millions of Spanish workers staged the first general strike in 14 years over housing, backed by UGT and CCOO, Reuters reported.

Russia's US ambassador Alexander Darchiev died suddenly in Moscow aged 66 of a chronic illness, the Foreign Ministry said, Reuters reported.

Kenya discharged its last Ebola patient, starting a 42-day countdown to Ebola-free status; seven recovered, two died, Reuters reported.

British police arrested a 41-year-old US Army officer suspected of spying for Russia; he has not been charged, CNN reported.

In Delhi, air eased after Diwali to 299 on Wednesday morning — still 'poor', the pollution board said via ANI.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SUMMARY, "utf8");
