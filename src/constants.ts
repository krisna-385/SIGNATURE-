export interface Chapter {
  id: number;
  title: string;
  content: string[];
  tamilQuote?: string;
}

export interface Phase {
  id: number;
  name: string;
  tamilName: string;
  description: string;
  chapters: number[];
}

export interface CastMember {
  name: string;
  role: string;
  description: string;
}

export const CAST: CastMember[] = [
  {
    name: "KRISNA",
    role: "The Structural Layer",
    description: "A silent observer who dissects truth from data. He does not just verify; he understands."
  },
  {
    name: "MALAYAVAA KANNAN",
    role: "The Execution Layer",
    description: "A man trapped in the machinery of survival, whose signature becomes a reflex before becoming a weapon of refusal."
  },
  {
    name: "HEIZHI",
    role: "The Production Node",
    description: "The emotionless generator of 'manufactured truth,' viewing the world only through output stability."
  },
  {
    name: "QUEENNIE",
    role: "The Mapping Layer",
    description: "The architect who converts scattered anomalies into a visible map of collapse."
  }
];

export const PHASES: Phase[] = [
  {
    id: 1,
    name: "The Discipline",
    tamilName: "அறம் (Aram)",
    description: "Establishing the mechanical discipline of audit and the quiet emergence of patterns.",
    chapters: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    name: "The System",
    tamilName: "பொருள் (Porul)",
    description: "The confrontation between manufactured truth and the human cost of execution.",
    chapters: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: 3,
    name: "The Exposure",
    tamilName: "வெளிப்பாடு",
    description: "Mapping becomes exposure as the system model stops being theoretical.",
    chapters: [21, 22, 23, 24, 25, 26, 27, 28]
  },
  {
    id: 4,
    name: "The Instability",
    tamilName: "நிலையற்ற தன்மை",
    description: "The audit production system begins showing inconsistency and feedback loops.",
    chapters: [29, 30, 31, 32]
  },
  {
    id: 5,
    name: "The Awareness",
    tamilName: "இன்பம் (Inbam)",
    description: "The silence after failure; the heavy peace found in understanding a collapsed system.",
    chapters: [33]
  }
];

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: "The Audit Precision",
    content: [
      "The audit department functioned with mechanical discipline. Files were arranged in strict order, as if disorder itself had been eliminated from the system.",
      "Krisna worked in silence.",
      "He did not rush through documents. He dissected them. Every number had to justify its existence through internal consistency, not external approval.",
      "Over time, he began noticing something subtle — not errors, but patterns that avoided becoming errors.",
      "The system was clean. Too clean.",
      "Not natural.",
      "But he did not label it yet.",
      "Only observed."
    ]
  },
  {
    id: 2,
    title: "The Broken Continuity",
    content: [
      "Kannan worked in a smaller office under constant operational pressure.",
      "Deadlines were not deadlines anymore. They were conditions for survival.",
      "His desk was filled with reports that looked identical in structure but differed in intent. Every document demanded a signature before understanding could form.",
      "He hesitated once.",
      "Only once.",
      "Then reality corrected him.",
      "He signed.",
      "Not because it was right.",
      "Because refusal had no space in his environment."
    ]
  },
  {
    id: 3,
    title: "The Split Memory",
    tamilQuote: "நான் சின்ன வயசுலை கிறிஸ்னா-வின் சக தோழர். ஆனால், குடும்ப பிரச்சனை யல், என்னக்கு மேல் படங்களுக்கு குடுத்து விக்கலை .",
    content: [
      "Krisna and Kannan once shared the same goal.",
      "Auditing was not a job for them at that time. It was a discipline — a way of maintaining truth in structured systems.",
      "But life had separated their paths.",
      "Kannan’s memory surfaced unexpectedly during work pressure.",
      "The sentence did not carry an explanation. It carried distance.",
      "At the same time, Krisna flagged a report.",
      "The structure was flawless. But repetition across unrelated files began appearing.",
      "No errors. Replication.",
      "Something was being produced — not processed.",
      "But still, no source was identified."
    ]
  },
  {
    id: 4,
    title: "The Invisible Producer",
    tamilQuote: "அறிக்கை வேண்டும். உடனே .",
    content: [
      "Across multiple client files, a consistent pattern existed.",
      "Same formatting logic. Same validation structure. Same approval rhythm.",
      "Krisna noticed it again. But this time, it felt wider.",
      "As if the same invisible hand had touched different systems without leaving identity behind.",
      "In a separate operational space, Heizhi’s firm functioned without disruption.",
      "“Ozhivippu Audit Report Firm” produced certificates on demand.",
      "Files were not questioned internally. They were generated as products of requirement.",
      "The request was routine. The output was immediate.",
      "But there was no link yet between the files Krisna saw and the source producing them.",
      "Only similarity. Not confirmation."
    ]
  },
  {
    id: 5,
    title: "The First Structural Anomaly",
    content: [
      "Krisna opened another file. Then another. Then another.",
      "The pattern was no longer subtle. It was consistent across unrelated entities.",
      "This was not a coincidence. But still not proof.",
      "He categorized it carefully.",
      "“Structured repetition without contextual justification”",
      "Kannan, at the same time, signed another report under pressure.",
      "Neither knew that their separate actions were feeding the same invisible system pattern.",
      "And somewhere behind all of it, the production of those reports continued uninterrupted."
    ]
  },
  {
    id: 6,
    title: "Repetition Becomes Structure",
    content: [
      "The number of anomalies increased.",
      "Krisna no longer saw them as isolated cases.",
      "Different companies. Different sectors. Same internal logic structure.",
      "The formatting, validation sequence, and approval rhythm repeated with unnatural consistency.",
      "He marked multiple files. But something changed internally.",
      "This was no longer a set of errors. It was beginning to resemble production behavior.",
      "Still, he did not step beyond his role. He only verified."
    ]
  },
  {
    id: 7,
    title: "Pressure Without Escape",
    content: [
      "Kannan’s workload intensified.",
      "Reports arrived faster than they could be understood.",
      "Each document carried the same invisible expectation: sign before questioning.",
      "He tried to pause once. The system did not pause with him.",
      "So he continued.",
      "His signature became less an action and more a reflex.",
      "The memory of Krisna surfaced again — but weaker now.",
      "Not inspiration. Distance."
    ]
  },
  {
    id: 8,
    title: "Pattern Recognition Threshold",
    content: [
      "Krisna grouped files together. He compared structures across unrelated entities.",
      "The conclusion was unavoidable. This was not random corruption.",
      "It was structured replication.",
      "He wrote a note in the system:",
      "“Recurrent structural similarity across independent audit files”",
      "But still avoided escalation. Because escalation required proof of source.",
      "And the source was still unclear."
    ]
  },
  {
    id: 9,
    title: "Heizhi Becomes Visible",
    tamilQuote: "அறிக்கை தேவையா… உருவாக்கலாம்.",
    content: [
      "For the first time, a consistent identifier appeared across multiple report origins.",
      "“Ozhivippu Audit Report Firm”",
      "Not as a scandal. Not as a suspect. But as a repeated production origin label.",
      "Krisna paused longer than usual.",
      "This was not a client anomaly anymore. This was a generator signature.",
      "In a separate space, Heizhi reviewed production logs.",
      "No emotion. Only output stability.",
      "The system responded instantly."
    ]
  },
  {
    id: 10,
    title: "Queenie Entry Point",
    content: [
      "At an institutional monitoring level, aggregated anomaly clusters reached a threshold.",
      "A new analysis unit was activated. Queenie.",
      "Not as an investigator. But as a mapper.",
      "Her first input was not a case. It was a pattern set.",
      "She did not ask what went wrong. She asked:",
      "“What is producing this repetition?”",
      "For the first time, the story moved from detection to mapping."
    ]
  },
  {
    id: 11,
    title: "Kannan Begins Internal Collapse",
    content: [
      "Kannan received a report that felt different. Not in structure. But in weight.",
      "It was too perfect. Perfection made refusal harder.",
      "He hesitated longer this time.",
      "The memory of Krisna returned — clearer now, but painful.",
      "“Integrity was once a choice.”",
      "Now it felt like a lost condition.",
      "He signed. But something inside him did not complete the action fully."
    ]
  },
  {
    id: 12,
    title: "System Becomes Traceable",
    content: [
      "Krisna connected repeated identifiers.",
      "Quennie confirmed structural mapping convergence.",
      "Heizhi’s firm was no longer just a repeated label. It was a centralized production node.",
      "But still:",
      "Krisna only verifies. Queenie only maps. Kannan only executes. Heizhi only produces.",
      "No roles overlap.",
      "The system was now fully visible. But not yet broken."
    ]
  },
  {
    id: 13,
    title: "Mapping Becomes Exposure",
    content: [
      "Queenie’s system model stops being theoretical.",
      "Clusters align into a single origin structure.",
      "What was once scattered repetition now converges into one operational core.",
      "She isolates it. Not as an accusation. But as for architecture.",
      "A production-based audit generation loop.",
      "She does not call it fraud yet. She calls it:",
      "“Self-reinforcing documentation system”"
    ]
  },
  {
    id: 14,
    title: "Krisna Crosses the Line",
    content: [
      "Krisna no longer only verifies files.",
      "He begins comparing origin signatures manually.",
      "The repetition is no longer subtle. It is engineered.",
      "He pauses longer on one report. Then another.",
      "Same structure. Same invisible signature logic.",
      "He finally writes internally:",
      "“This is not an audit deviation. This is a manufactured truth.”",
      "For the first time, verification is no longer neutral."
    ]
  },
  {
    id: 15,
    title: "Kannan’s Breaking Point",
    tamilQuote: "நான் சின்ன வயசுலை கிறிஸ்னா-வின் சக தோழர். ஆனால், குடும்ப பிரச்சனை யல், என்னக்கு மேல் படங்களுக்கு குடுத்து விக்கலை .",
    content: [
      "Kannan receives a report that feels different. Not because of structure. Because of recognition.",
      "He sees consistency again. But now it feels like betrayal disguised as normality.",
      "He remembers Krisna again — fully this time.",
      "The memory is no longer distant. It is painful.",
      "He does not hesitate before signing.",
      "But after signing, his hand remains on the document longer than needed.",
      "As if waiting for reversal that will never come."
    ]
  },
  {
    id: 16,
    title: "Heizhi Operational Reveal",
    tamilQuote: "தேவை இருக்கும்போது, உருவாக்கம் இயல்பாகும்.",
    content: [
      "Quennie traces convergence.",
      "All repeated outputs point to a single operational node: “Ozhivippu Audit Report Firm”",
      "Now Heizhi is no longer a shadow. He is a functional source.",
      "But still not labeled criminal. Only operational.",
      "Heizhi reviews demand flow calmly.",
      "No emotion. Only system logic."
    ]
  },
  {
    id: 17,
    title: "System Conflict Emerges",
    content: [
      "Krisna submits a structural anomaly escalation note.",
      "Queennie aligns it with mapping output.",
      "For the first time: Verification + Mapping = Overlap",
      "But institutional response rejects escalation. Because output is technically valid.",
      "This creates conflict: Truth exists structurally, but is not accepted institutionally.",
      "The system does not break yet. But it begins to resist understanding."
    ]
  },
  {
    id: 18,
    title: "Kannan Refuses",
    tamilQuote: "இது சரி இல்லை …",
    content: [
      "A report arrives. Kannan looks at it.",
      "He does not sign immediately. This is new.",
      "Time passes. He hears nothing but internal pressure.",
      "Then finally, he whispers it to himself.",
      "But after seconds of silence, he signs anyway.",
      "And immediately regrets that he needed to sign at all."
    ]
  },
  {
    id: 19,
    title: "Queenie Connects the Human Layer",
    content: [
      "Queenie expands mapping beyond structure. She connects human execution points.",
      "Kannan appears repeatedly at pressure nodes.",
      "Krisna appears at verification bottlenecks.",
      "Heizhi appears at generation core.",
      "Now the system is not abstract. It is human-linked.",
      "But still functional. Still running."
    ]
  },
  {
    id: 20,
    title: "Pre-Collapse State",
    content: [
      "Everything is visible now:",
      "Production core identified. Verification system stressed. Execution layer destabilizing. Mapping layer complete.",
      "But nothing has stopped.",
      "Krisna realizes something critical: Knowing the system is not the same as stopping it.",
      "Kannan continues signing. Heizhi continues producing. Queenie continues mapping.",
      "The system is fully exposed. But still alive."
    ]
  },
  {
    id: 21,
    title: "System Instability Begins",
    content: [
      "The audit production system begins showing inconsistency for the first time.",
      "Not in output quality. But in timing.",
      "Reports that once appeared instant now delay unpredictably.",
      "Quennie’s mapping shows something new: Feedback loops are interfering with generation cycles.",
      "The system is no longer smooth. It is reacting to itself."
    ]
  },
  {
    id: 22,
    title: "Krisna Detects Contradiction",
    content: [
      "Krisna notices something unusual in verification patterns.",
      "Two identical structural reports carry different approval traces.",
      "Same output. Different validation signatures. This should not exist.",
      "He pauses longer than usual. Then writes:",
      "“Internal contradiction within identical audit structures”",
      "This is no longer an observation. This is structural conflict detection."
    ]
  },
  {
    id: 23,
    title: "Kannan Refuses Twice",
    tamilQuote: "இது என் கையெழுத்து இல்லை …",
    content: [
      "A report arrives. Kannan opens it. Close it. Opens again.",
      "For the first time, he does not immediately sign.",
      "A supervisor calls. Pressure increases. He hears only noise.",
      "But his hand does not move.",
      "Silence follows. He does not sign.",
      "For the first time, execution fails."
    ]
  },
  {
    id: 24,
    title: "Heizhi System Disruption",
    tamilQuote: "ஏன் நிறுத்தம் வருகிறது…",
    content: [
      "In the production core, Heizhi notices irregular request patterns.",
      "Demand is decreasing. Not externally. Internally.",
      "The system is not receiving confirmation loops.",
      "He tries to stabilize output logic. But repetition no longer guarantees acceptance.",
      "No answer. Only system delay."
    ]
  },
  {
    id: 25,
    title: "Queenie Activates Link",
    content: [
      "Queenie connects all nodes in real-time:",
      "Krisna → contradiction detection. Kannan → execution refusal. Heizhi → production instability.",
      "She identifies a closed-loop collapse pattern:",
      "A system dependent on unquestioned validation is losing validation behavior.",
      "This is critical. Because the system cannot function without belief in its output."
    ]
  },
  {
    id: 26,
    title: "Krisna Forces Exposure",
    content: [
      "Krisna submits a consolidated structural report. Not accusation. No complaints.",
      "Just contradictory evidence. He does not name Heizhi directly.",
      "He names the structure: “Self-validating audit generation loop with independent replication source”",
      "This forces institutional review. For the first time, system integrity is questioned formally."
    ]
  },
  {
    id: 27,
    title: "Kannan Breaks the Cycle",
    content: [
      "Another report arrives. Kannan looks at it. He does not open it.",
      "Instead, he returns it. Marked: “Rejected due to ethical inconsistency”",
      "This is the first active refusal. No hesitation. No delay.",
      "Rejection. His system role begins collapsing."
    ]
  },
  {
    id: 28,
    title: "System Collapse Event",
    tamilQuote: "சிஸ்டம்… வேலை செய்யவில்லை …",
    content: [
      "Quennie’s model shows final convergence failure.",
      "Heizhi’s production system loses synchronization completely.",
      "Reports begin generating without validation endpoints. Verification systems stop accepting outputs.",
      "The execution layer (Kannan) refuses input. The structural layer (Krisna) blocks contradictions.",
      "The mapping layer (Quennie) confirms full breakdown.",
      "Heizhi observes system failure internally. No reaction. Only silence."
    ]
  },
  {
    id: 29,
    title: "Silence After Failure",
    content: [
      "The system that once produced continuous audit reports is now inactive.",
      "No outputs. No validation loops. No replication cycles.",
      "Only archived records remain.",
      "Quennie logs the final state: “Closed system with unresolved structural dependency”",
      "There is no celebration. Only silence."
    ]
  },
  {
    id: 30,
    title: "Krisna Without System",
    content: [
      "Krisna returns to basic verification work. But everything feels different now.",
      "Every file he sees is no longer just data. It carries history.",
      "He no longer flags anomalies. He understands them before they form.",
      "He writes no escalation notes anymore. Because escalation no longer exists.",
      "Only awareness remains."
    ]
  },
  {
    id: 31,
    title: "Kannan’s Consequence",
    tamilQuote: "இது என் கையெழுத்து இல்லை …",
    content: [
      "Kannan is no longer in the execution cycle. His refusal created administrative separation.",
      "He sits at a desk that no longer receives system pressure.",
      "But absence is heavier than pressure.",
      "He replays decisions silently. No justification helps anymore.",
      "Now he understands it fully."
    ]
  },
  {
    id: 32,
    title: "Heizhi’s Withdrawal",
    tamilQuote: "இது தொடர முடியாத நிலை …",
    content: [
      "Heizhi’s production system is frozen. No external shutdown was issued.",
      "It simply stopped functioning under a contradiction load.",
      "He reviews past outputs. No emotion changes.",
      "Only acknowledgement of failure conditions.",
      "No defense. No blame. Only termination of process logic."
    ]
  },
  {
    id: 33,
    title: "Queenie’s Final Map",
    content: [
      "Queenie completes final structural mapping. All nodes are now disconnected.",
      "But the architecture remains documented:",
      "Production node (Heizhi), Execution layer (Kannan), Verification layer (Krisna).",
      "She does not assign fault. She only records structure integrity failure.",
      "Her final system note: “Truth existed, but operational trust did not sustain it”"
    ]
  }
];
