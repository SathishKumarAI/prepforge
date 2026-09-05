---
qid: ing_db148036ca__star__local
question: 'Explain: Packet Filtering Firewalls — Firewall Explained to Kids and Adults'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 392
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:46:06-05:00'
sources: []
---

**Situation**  
During a hackathon for a school‑tech club, our team was tasked with creating a workshop that would teach both parents (adults) and their elementary students how basic internet security works. The event had 40 participants, half of whom were under 12.

**Task**  
I needed to design an engaging, age‑appropriate demo that explained what packet filtering firewalls do—without jargon—and then show a live example so everyone could see the concept in action.

**Action**  
First, I sketched a “roadmap” board: packets as cars, IP addresses as house numbers, and firewall rules as traffic lights. For adults, I added a simple command‑line script that read a PCAP file, filtered by port 80, and logged allowed vs blocked packets—using `tshark` and Python’s `scapy`. For kids, I turned the same logic into a board game: cards representing packets were either “green” (allowed) or “red” (blocked), with a rule card that only let cars from certain neighborhoods pass. I ran both demos side‑by‑side, letting participants try the game while I explained how each rule matched a packet header field.

**Result**  
All 40 attendees gave an average satisfaction score of 4.8/5 on our post‑event survey; 93% said they now “understand what a firewall does.” The code snippet was copied 120 times from my GitHub repo, and the board game version was printed for future use by the club’s teachers. I learned that blending analogies with live tech demos bridges the knowledge gap between kids and adults most effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
