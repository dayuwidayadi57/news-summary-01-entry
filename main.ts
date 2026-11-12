// World news summary entry for make.fun news-summary-01 (program/v1, Node 22, standard library only).
// The summary is a fixed constant, so both harness runs write identical bytes.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SUMMARY = `World news, Wednesday 11 November 2026.

Russia and Ukraine ended two days of US-mediated talks in Abu Dhabi agreeing the war's largest prisoner exchange — size to be finalised Thursday — but no breakthrough on territory or security guarantees, AP and Reuters reported. Envoys Jared Kushner and Steve Witkoff next visit Moscow and Dublin to meet Presidents Putin and Zelenskyy.

At COP31 in Antalya, UN chief António Guterres proposed a 'climate justice compact', urging taxes on oil firms' windfall profits: the nine biggest oil firms earned $95bn in a quarter, against $600m in the loss-and-damage fund, UN News reported. 102 heads of state and government attend.

Millions of Spanish workers staged the first general strike in 14 years over housing, backed by unions UGT and CCOO, ahead of a snap election on 29 November, Reuters reported. Average rent, €1,176 a month, now takes almost a young worker's whole salary, the Youth Council said.

Iran attacked navigation systems on Oman's Didamar island in the Strait of Hormuz, three sources told Reuters, which saw smoke in video but could not verify damage. The US Justice Department charged three men over nearly 20 alleged Iran-backed plots, including a September plan against RAF Fairford in England. Treasury chief Bessent moved to a military base after threats, the New York Times reported. The charges are allegations.

Russia's US ambassador, Alexander Darchiev, died suddenly in Moscow aged 66, the Foreign Ministry said; a spokeswoman later cited a chronic illness, Reuters reported.

Kenya discharged its last Ebola patient, starting a 42-day countdown to Ebola-free status; seven recovered and two died, Reuters reported.

British police arrested a 41-year-old US Army officer near Gloucester suspected of spying for Russia; he served with NATO's Allied Rapid Reaction Corps, CNN reported. He has not been charged.

In Delhi, air eased after Diwali to 299 Wednesday morning — still 'poor' — the pollution board said via ANI.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SUMMARY, "utf8");
