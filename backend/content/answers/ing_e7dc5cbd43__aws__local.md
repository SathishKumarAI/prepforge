---
qid: ing_e7dc5cbd43__aws__local
question: A whole-body controller trained entirely in simulation has to run on real
  hardware. What transfers, what does not, and how do you close the gap?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 431
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:54-05:00'
sources: []
---

**Situation & Task**  
I led a robotics team tasked with deploying a whole‑body controller—trained entirely in Unity/Simulink—to an embedded ARM Cortex‑M platform on a quadruped. The challenge was the reality gap: simulation physics, sensor noise, and latency were all different from hardware.

**Action**  
1. **Identify what transfers** – low‑level control logic (PID loops), state estimation, and safety guards are architecture‑agnostic. I extracted these modules into reusable C++ libraries and versioned them in a GitOps repo (GitHub + CodePipeline).  
2. **What doesn’t transfer** – dynamics, actuation limits, and sensor characteristics. I built a *Reality Wrapper* that injects real‑time joint encoder noise, motor backlash models, and a 5 ms latency buffer using an RTOS (FreeRTOS) on the board.  
3. **Close the gap** – I implemented an online domain randomization layer: during a 10‑hour calibration run, the controller observed actual torque curves from the hardware’s CAN bus and updated its internal model via Bayesian inference (AWS SageMaker Edge). This closed the mean absolute error in joint torque from 12 Nm to <1 Nm.  
4. **Deploy & Monitor** – I used AWS IoT Greengrass for secure OTA updates, CloudWatch for real‑time telemetry, and a Lambda function that triggers re‑training when drift exceeds 5%.

**Result**  
Post‑deployment, the robot achieved >95 % task success on a complex terrain benchmark, up from 60 % in simulation. The calibration pipeline reduced manual tuning time by 70 %.  

**Leadership Principles** – *Ownership* (I owned the end‑to‑end transfer), *Dive Deep* (quantified torque error and latency), and *Bias for Action* (rapid iteration with edge inference).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
