---
qid: ing_4c7f579d83__think__local
question: 'Explain: Now what that would do is it — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 462
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:23:11-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   * What exactly does “that” refer to? Assume we’re talking about a new feature (e.g., real‑time traffic) added to Google Maps.  
   * Decide on scope: focus on high‑level architecture, not low‑level code.  

**2. Pick a mental model**  
   * Use the classic **“Data → Compute → Storage → Service”** framework.  
   * Map each layer to Google’s needs: massive data ingestion (satellite, user traffic), heavy compute for routing/ML, durable storage, and APIs for mobile/web clients.

**3. Step‑by‑step reasoning**  
   1. **Data ingestion** – sensors, user reports → stream processing (Kafka/Flink).  
   2. **Feature engineering** – extract travel time, congestion patterns → store in a feature store.  
   3. **Model training & inference** – train on GPU clusters, serve via model servers (TensorFlow Serving) for real‑time routing adjustments.  
   4. **Routing engine** – use graph databases or compressed adjacency lists; run Dijkstra/A* with dynamic weights from ML predictions.  
   5. **Caching & edge deployment** – CDN/edge nodes to reduce latency for map tiles and route responses.  
   6. **APIs & client sync** – REST/GraphQL endpoints, push updates via WebSockets or FCM.

**4. Common traps**  
   * Forgetting data consistency between real‑time streams and batch models.  
   * Overlooking scalability of the routing engine when millions of concurrent users request routes.  
   * Ignoring privacy/security (user location data).

**5. Sanity check & verbalize**  
   * Verify each layer can handle 10× growth: e.g., Kafka topic partitions, model inference latency < 50 ms.  
   * Explain trade‑offs: batch vs streaming, GPU cost vs inference speed, edge caching hit rates.  

By following this structured flow you’ll confidently explain how adding a feature changes the overall system design of Google Maps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
