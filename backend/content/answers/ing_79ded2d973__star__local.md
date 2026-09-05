---
qid: ing_79ded2d973__star__local
question: 'Explain: VII. Port Binding — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 388
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:26-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of a legacy recommendation engine into a container‑oriented microservice architecture on Kubernetes. The old service listened on hard‑coded ports and used environment variables for database URLs, which caused chaos during CI/CD rollouts.

**Task** – My goal was to refactor the application so it adhered to the 12‑Factor App’s port binding principle: “The app should bind to a port that is supplied by the platform at runtime.” This would let us run multiple instances behind an Ingress without port conflicts and enable seamless scaling.

**Action** – I rewrote the entry point to read `PORT` from `process.env`, defaulting to 8080 if unset. The Flask app was modified to call `app.run(host='0.0.0.0', port=int(os.getenv('PORT', 8080)))`. In Docker, I removed the `EXPOSE 5000` line and relied on Kubernetes’ service discovery; the deployment YAML now specifies `containerPort: 80` but the container listens on whatever `$PORT` is injected by Helm via a ConfigMap. I also added health‑check probes that query `/healthz`, ensuring the platform only routes traffic to healthy pods.

**Result** – After the refactor, we could spin up ten parallel recommendation instances behind a single Ingress without any port clashes, improving request throughput from 1,200 req/min to 4,800 req/min. Deployment time dropped by 30 % because Helm no longer needed manual port adjustments. I learned that strict adherence to port binding not only simplifies scaling but also reduces configuration drift across environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
