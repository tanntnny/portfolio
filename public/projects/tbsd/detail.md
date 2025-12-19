# Achievements
---
### International Competition & Exhibition
- **Bronze Medal** - International Exhibition of Inventions Geneva 2025 (Geneva, Switzerland). Selected as Thailand’s representative team.
- **Silver Medal + Special Award** - International Invention, Innovation & Technology Exhibition 2023 (Kuala Lumpur, Malaysia).
- **Bronze Medal** - Seoul Int’l Invention Fair 2023 (Seoul, Korea).
- **Gold Medal** - Thailand Inventors' Day 2023 (Bangkok, Thailand).
- **Gold Medal** - International Young Invectors Award 2023 (Jakarta, Indonesia).
### Nation Competition
- **1st Prize** - Young Scientist Competition 2024 (Bangkok, Thailand).
- **Best of the Best** - Suan Dusit National Conference 2023 (Bangkok, Thailand).
- **Winner Prize** - PCSHS Science Symposium 2023 (Buriram, Thailand).
- **Much more awards in local competitions.**
### Intellectual Property
- **Patent Pending** - Application Request No. 2403002061.
- **Copyright** - No. 11291
- **Academic Paper** - Link to [Research Gate](https://www.researchgate.net/publication/395468247_karphathnarabbpayyapradisthpheuxtrwchacheuxmikhobaekhthireiym_thubexrkhulosis_M_tuberculosis_caksemhadwywithikartrwc_Acid-Fast_Bacillus_AFB)

# Background
---
Tuberculosis (TB) remains the major public health, particularly in Sout-East Asia, where diagnosis often relies on manual examination of sputum samples using Acid-Fast Bacillus (AFB) method. This process is **time-consuming, required expertise, and prone to human error**, especially in resource-limited settings. There is a need for tools that can assist medical professionals by improving diagnostic efficiency and consistency.

# Methodology
---
This project develops the AI to detect M.tuberculosis, the bacteria that causes TB, from sputum images. A dataset of AFB-stained sputum samples were collected and labeled with expert guidance in total of **1950 images**. Preprocessing and image augmentations were applied to the dataset to improve accuracy and stabilise training. Deep learning–based object detection models, **variants of Yolov5 (nano, small, medium, large)**, were trained to inspect TB-positive regions, evaluated using standard performance metrics, and integrated into a web application for real-time screening. A microscope attachment and imaging setup were also designed to ensure consistent image acquisition. Finally, I decided to call the system **"iTB Screener: An Intelligent Microscope for TB Detection"**.

![iTB Screener](/public/projects/tbsd/image1.jpeg)

# Results
---
I colaborated with an expert researcher from **BIOTEC (NSTDA) and Siriraj Hospital** to validate the model performance with real cases. The best model, **Yolov5m**, achieved: **95% precision, 94% recall, and 94% F1-score** on the test set, which is comparable to the other system using AFB method. In real-world utilization, physicians and expert technicians reported that the system significantly reduced the time required for TB diagnosis **(from 30 minutes → 5 minutes)** while maintaining high accuracy. The web application allowed for easy integration into existing workflows, and the microscope attachment ensured consistent image quality across different settings. Also the price of the whole system was estimated to be around **500 - 1,000 times cheaper** than commercial automated TB diagnostic machines, making it accessible for low-resource hospitals and clinics.

![Picture of Product](/public/projects/tbsd/product.jpeg)

# Gallery
---
![Full image of the presentation booth in Geneva Invention Exhibition](/public/projects/tbsd/geneva.jpeg)
![Awarding Ceremony in Geneva Invention Exhibition](/public/projects/tbsd/geneva_award.JPG)
![Awarded 1st Prize in YSC2024](/public/projects/tbsd/ysc2024.jpeg)
![Awarded Best of the Best in SDNC2023](/public/projects/tbsd/sdnc2023.jpeg)

### Links
1. [Poster Presentation (PDF) in Geneva Invention Exhibition](https://drive.google.com/file/d/1hO9YCiZaYLwTXhtxXA59lVapCvIhNpOg/view?usp=sharing)

2. [Certificate from Geneva Invention Exhibition](https://drive.google.com/file/d/1K634IJktF3Bw4zp6cPLC1ndkSMlfa92S/view?usp=sharing)