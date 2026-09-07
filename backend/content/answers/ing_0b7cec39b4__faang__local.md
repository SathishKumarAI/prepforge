---
qid: ing_0b7cec39b4__faang__local
question: 'Explain: The PM wants "point your camera at a plant and the app tells you
  about it." Architect it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 486
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:10-05:00'
sources: []
---

**Clarify**  
The product is an iOS/Android mobile app that, when a user points the device’s camera at a plant, returns botanical information (species name, care tips, health status).  
Assumptions:  
* Users have decent lighting and can keep the plant in frame for ~2 s.  
* The backend can handle thousands of concurrent requests; latency < 1 s is acceptable.  
* Plant images are stored locally only for display; no user data is persisted beyond the session.

**Approach**  
1. **On‑device capture & preprocessing** – use camera API to grab a frame, crop/resize to 224×224, normalize.  
2. **Inference engine** – TensorFlow Lite model fine‑tuned on PlantCLEF dataset; returns top‑k species probabilities.  
3. **Metadata lookup** – local SQLite cache of plant profiles (name, description, care). If cache miss → fetch from remote REST endpoint (`/plants/{id}`) and store locally for offline use.  
4. **Result presentation** – show species name + photo + care guide; provide “more info” link to external resources.

**Depth**  
* Model size ≈ 15 MB, inference ~70 ms on modern phones.  
* Use async networking (Retrofit/OKHttp) with exponential back‑off for reliability.  
* Cache TTL 30 days; purge LRU if storage >100 MB.  
* Privacy: no raw images sent to server unless user opts in.

**Edge Cases**  
* Poor lighting → request re‑capture or use image‑enhancement pipeline.  
* Ambiguous species (similar morphology) → show top‑k with confidence bars.  
* Offline mode → fallback to cached data; show “offline” banner.  

**Optimize & Communicate**  
- **Performance**: Quantize model, use GPU delegate when available.  
- **Scalability**: Serve metadata via CDN + edge caching; batch inference if multiple plants in a single frame.  
- **Narration**: Explain trade‑offs (on‑device vs cloud) and how latency constraints guide architecture decisions.  

This design balances user experience, privacy, and scalability while keeping the system maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
