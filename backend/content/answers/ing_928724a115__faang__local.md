---
qid: ing_928724a115__faang__local
question: 'Explain: 🔢 Numbers and formulas to know cold — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 699
total_tokens: 934
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:16-05:00'
sources: []
---

**Clarify**  
The interviewer wants a quick‑reference “cheatsheet” that captures the essential numeric relationships used when reasoning about *cold*—i.e., low temperatures—in physics and engineering (temperature scales, thermal energy, heat transfer). We’ll assume the audience is familiar with SI units but needs handy conversion factors and core formulas.

---

### **Approach**  
1. List temperature conversions (C ↔ K ↔ °F).  
2. Provide key equations for thermal energy & capacity.  
3. Show simple heat‑transfer expressions (conduction, convection, radiation).  
4. Note units, typical magnitudes, and where each formula is most useful.

---

### **Depth**

| Concept | Formula | Units | Typical Use |
|---------|---------|-------|-------------|
| **Temperature scales** | °C = K – 273.15 ; °F = (°C × 9/5) + 32 | K, °C, °F | Quick conversion for sensors or comfort calculations |
| **Thermal energy (ideal gas)** | \(Q = n C_v \Delta T\) | J | Estimating heat added to a closed system |
| **Heat capacity** | \(C = \frac{dQ}{dT}\) or \(C = m c_p\) | J/K or J/(kg·K) | Designing cryogenic storage, batteries |
| **Conduction (Fourier)** | \(q = -k A \frac{dT}{dx}\) | W | Calculating wall heat loss at −20 °C |
| **Convection** | \(q = h A (T_{\text{surface}}-T_{\infty})\) | W | Cooling of a cold‑storage rack |
| **Stefan–Boltzmann (radiation)** | \(q = \varepsilon \sigma A (T^4 - T_{\text{env}}^4)\) | W | Radiative heat loss from cryogenic vessels |
| **Latent heat** | \(Q_L = m L\) | J | Phase change of liquid nitrogen (L ≈ 200 kJ/kg) |

---

### **Edge Cases**

* **Zero Kelvin:** absolute zero; all thermal motion ceases.  
* **Negative Celsius:** use Kelvin for equations to avoid negative temperatures in exponentials.  
* **Non‑ideal gases** or solids with temperature‑dependent \(c_p\): interpolate from tables.

---

### **Optimize & Communicate**

- Highlight that most *cold* engineering problems hinge on heat transfer; pick the right mode (conduction vs. radiation) based on geometry and environment.  
- Emphasize unit consistency: always convert to SI before plugging into formulas.  
- For rapid estimation, use “rule‑of‑thumb” constants (e.g., \(k_{\text{steel}}\approx 50\) W/m·K).  

By presenting a concise table plus clear usage notes, you demonstrate structured problem‑solving, effective communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
