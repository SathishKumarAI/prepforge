---
qid: ing_4d8f52ccd1__fp__local
question: 'Explain: Limitations — How do AirTags work?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 398
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:50:06-05:00'
sources: []
---

**How AirTags Work (from first principles)**  
At its core, an AirTag is a tiny *location beacon* that turns the ubiquitous Bluetooth‑Low‑Energy (BLE) protocol into a probabilistic map of where it has been.  
1. **Signal emission:** The tag periodically broadcasts a short BLE packet containing a rotating cryptographic identifier.  
2. **Reception & triangulation:** Nearby iOS devices (the “Find My” network) pick up the packet, timestamp it, and report the received‑signal‑strength (RSSI) to Apple’s servers.  
3. **Statistical inference:** With many such reports from different angles, the server applies a Bayesian filter (essentially a weighted average that favors recent, strong signals) to estimate the tag’s position in 2‑D space.  
4. **Privacy‑first design:** The identifier is constantly reshuffled; only Apple can decrypt it, preventing passive tracking by third parties.

**Why these limits arise**

- *BLE range* (~30 m) means a tag must be within sight of an iOS device—no direct GPS.  
- RSSI is noisy and highly dependent on obstacles; the Bayesian filter cannot guarantee sub‑meter accuracy unless many reports converge.  
- The privacy rotation prevents continuous tracking, but also removes the ability to reconstruct a full trajectory without Apple’s data.  

**Non‑obvious insight:**  
Because the Find My network relies on *user devices* as relays, AirTags inherit the spatial distribution of those users. In sparsely populated or indoor areas with few iOS owners, the tag may never be localized—its “coverage map” is itself a probabilistic model of human presence rather than a fixed infrastructure. This coupling to user density is often overlooked when evaluating reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
