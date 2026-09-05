---
qid: ing_c24071c352__star__local
question: 'Explain: Agent SDKs (Lab-Specific) — Framework Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 400
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:23-05:00'
sources: []
---

**Situation** – At a robotics research lab we were building an autonomous inspection drone. The existing simulation suite was built on ROS2, but the new AI planning component needed to run in real time on the onboard Jetson Xavier. We had three candidate Agent SDKs: RLLib‑based custom framework, Unity ML‑Agents, and OpenAI Gym with a custom wrapper.

**Task** – Pick a single SDK that would integrate smoothly with ROS2, support GPU acceleration on NVIDIA hardware, allow rapid iteration of policies, and keep the codebase maintainable for future extensions.

**Action** – I first benchmarked each SDK’s inference latency on the Xavier using a standardized navigation task. RLLib gave 8 ms per step, Unity 12 ms, Gym 9 ms but required an extra C++ bridge. I then evaluated integration complexity: ROS2 nodes could publish/subscribe directly to RLLib policies; Unity needed a middleware layer; Gym required writing a custom ROS2 wrapper. Considering our team’s Python expertise and the need for deterministic real‑time control, I chose RLLib. I refactored the policy into a lightweight C++ inference module wrapped with pybind11, added a ROS2 action server to expose goal handling, and set up CI pipelines that run nightly simulations in Gazebo.

**Result** – The final system achieved 7 ms per decision cycle, met the 10 ms real‑time requirement, and cut simulation iteration time by 30 %. The codebase stayed clean with a single SDK dependency, and the team could now experiment with new algorithms without re‑engineering ROS2 interfaces. I learned that latency profiling + integration cost is more decisive than raw performance when selecting an agent framework for embedded robotics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
