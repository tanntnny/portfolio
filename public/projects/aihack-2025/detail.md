# Achievements
---
Won the hackathon and received a 50,000 THB prize, earning the Winner Award based on presentation, business insights, and AUC score.

# Background
---
AIRA & AIFUL operate primarily in **personal revolving loans**, targeting low-income workers, a segment that can generate strong returns but also carries higher default risk. Core issues of expense volatility is the credit cost (276,000 accounts, 8,341M THB portfolio scale, interest rate range 13-25%), the OPEX mix of credit cost = 54%.

**Problem Statement:** reduce profit volatility by lowering credit cost with better credit risk identification and improving portfolio controls for customers.

# Methodology
---
We built an end-to-end credit risk pipeline with two major components:
### 1) Data Preprocessing & Feature Engineering - SUSHI Method
**SUSHI =** Standardized dataset | Unify missing values | Slice features | Highlight insights | Integrate for modeling

Key steps:
* **Ambiguous datapoint removal:** dropped **473 pairs (~3%)** where nearly identical feature vectors had conflicting labels (cosine similarity > 98%)
* **Outlier elimination:** 13+ columns had >10% outliers
* **Missing value handling:** 18 columns had >40% missing
* **Type casting + encoding:** corrected data types, standardization, and one-hot encoding
* **Feature engineering examples:**

 * `Working Period = c_number_working_year + c_number_working_month`
  * `Loan to Salary = r_all_loan_amount / c_salary`
  * `Credit to Salary = r_expected_credit_limit / c_salary`

### 2) RAMEN Model — Regional Ensemble Credit Risk Model

**RAMEN = Regional Aggregated Model Ensemble Network**

* **Regional Aggregation:** provincial patterns vary (roughly **4%–22%** distribution), so we incorporate regional model to capture local risk behavior.
* **Ensemble Network (Stacking models):** used an AutoGluon stacking ensemble to combine multiple learners into a robust meta-learner for better generalization.

# Business Application
---
We applied model outputs into operational actions that reduce risk at the source and optimize the portfolio.

### 1) ABCX Tiered Threshold Clustering
Segment customers by predicted default probability into four tiers: A (low-risk), B (low-medium-risk), C (medium-high-risk), X (high-risk).

**New account approval (risk gating):**
* Approve/fast-track **A–B**
* Apply stricter verification, pricing, or collateral/guarantor requirements for **C**
* Reject or strongly restrict **X** to block high expected credit cost upfront

**Existing account controls (portfolio optimization):**
* **Credit limit re-evaluation:** decrease limits for high-risk tiers; selectively increase for low-risk tiers
* **Early-warning monitoring:** detect tier migration (e.g., B→C) and trigger proactive interventions

### 2) Growth Strategy: Benefit Plus Card 2.0 (B2B2C)

Data insight: **higher salary correlates with lower default risk**; lowest-default occupations include **specialist, management, and desk work**, and desk work has a large addressable base.

Proposed idea:
* Build **employer partnerships** (MOU) to offer a **Corporate Welfare Credit Line**
* Instant employment verification → lower-risk acquisition funnel
* Mutual value:
  * **AIRA & AIFUL:** verified low-risk borrowers, lower credit cost
  * **Companies:** low/no cost employee benefit
  * **Employees:** faster approval, safer access to credit

![Model Architecture](/public/projects/aihack-2025/model.jpeg)

# Expected Impact
---
A combined approach, **better onboarding risk selection + portfolio actions + lower-risk acquisition**, targets a steady decline in credit cost and supports sustainable operating profit by FY 2027/3 Q3.
