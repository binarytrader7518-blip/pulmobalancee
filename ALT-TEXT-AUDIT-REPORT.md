# ALT-TEXT-AUDIT-REPORT

Site: https://pulmobalancee.vercel.app  
Audit date: 2026-11-25  
Method: every built HTML file was parsed and every `<img>` element inspected (no `<picture>`/`<source>` elements are used). Images inserted by JavaScript: none (the script only swaps a broken external network image for a text monogram, which is `aria-hidden`).

## Summary

- Pages audited: 29
- Total `<img>` elements checked: 282
- Images with descriptive alt text: 282
- Decorative images with `alt=""`: 0
- Missing / generic alt found on final scan: 0
- Images corrected during audit: 27 (sticky-bar thumbnail, one per page)
- Corrected in this pass: the 6-bottle thumbnail in the sticky offer bar previously used an empty alt on all 27 pages; it now reads "Pulmo Balance 6-bottle Best Value package thumbnail". The fallback shown when an external network product image fails now carries role="img" and the product's alt text.
- External images: product cards for the network websites load images from those sites; each has alt text `<Product> product image`. They could not be fetched from the build sandbox (network restricted), so their visual content was not inspected; if one fails to load, a text monogram replaces it.
- Inline SVG ingredient illustrations carry `role="img"` and an `aria-label`; hero-background copies are wrapped in `aria-hidden="true"` containers. UI icons are `aria-hidden`.
- Final verification status: PASSED (second full scan of the built HTML completed). Deployed HTML has not been scanned because the site is not deployed yet; it is generated from these same files.


## /404.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |

## /affiliate-disclosure.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /alternatives.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /benefits.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-two-bottles-lung-support-banner.webp` | Two Pulmo Balance bottles with Daily Lung Support highlights |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-studio-bottle.webp` | Pulmo Balance Daily Lung Support bottle beside green leaves and white capsules |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/breathing-exercises-daily-routine.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `https://the-quantum-wave-original.com/assets/images/the-quantum-wave-original.jpg` | The Quantum Wave product image |
| `https://neuralreviven.com/assets/img/neural-revive-tablet-phone.webp` | Neural Revive product image |
| `https://en-dentabiome.vercel.app/images/dentabiome-bottle.webp` | DentaBiome product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `/assets/img/blog-antioxidants-quercetin-pine-bark.webp` | Pulmo Balance bottle with green leaves and capsules on a stone coaster |
| `/assets/img/blog-sleep-and-breathing.webp` | Pulmo Balance bottle in calm green evening light beside a potted plant |
| `https://lymphtoneic.com/assets/img/lymph-tonic-bottle.webp` | Lymph Tonic product image |
| `https://okinawantonic.com/assets/img/okinawa-flat-belly-tonic-jar.webp` | Okinawa Flat Belly Tonic product image |
| `https://neuraserge.com/assets/img/neuro-serge-bottle.webp` | Neuro Serge product image |
| `https://fortaudifort.com/assets/img/audifort-bottle.webp` | Audifort product image |
| `https://pinealgguardianx.com/img/pineal-guardian-x-bottle.webp` | Pineal Guardian X product image |
| `https://core-femicore.com/images/femicore-bottle.webp` | Femicore product image |
| `https://en-spartamax.vercel.app/assets/img/spartamax-bottle.webp` | Spartamax product image |
| `https://liivarix.vercel.app/assets/img/livarix-bottle.webp` | Livarix product image |
| `https://en-alphasurge.vercel.app/assets/img/alpha-surge-bottle.webp` | Alpha Surge product image |
| `https://en-colestzen.vercel.app/img/colestzen-bottle.webp` | ColestZen product image |
| `https://en-dentabiome.vercel.app/images/dentabiome-bottle.webp` | DentaBiome product image |
| `https://en-gutsave.vercel.app/img/gut-save-bottle.webp` | Gut Save product image |
| `https://eng-glpro.vercel.app/assets/img/glpro-bottle-front.webp` | GLPro product image |
| `https://the-quantum-wave-original.com/assets/images/the-quantum-wave-original.jpg` | The Quantum Wave product image |
| `https://the-genius-song-original.com/assets/images/the-genius-song-audio.webp` | The Genius Song product image |
| `https://neuralreviven.com/assets/img/neural-revive-tablet-phone.webp` | Neural Revive product image |
| `https://shiftingvibration.org/assets/img/shifting-vibrations-audio-package.webp` | Shifting Vibrations product image |
| `https://aldea-tinaaldea.com/assets/img/og-tina-aldea-soulmate-sketch.webp` | Tina Aldea Soulmate Sketch product image |
| `https://dubaiwealthseccret.com/assets/img/dubai-wealth-secret-audio-program.webp` | Dubai Wealth Secret product image |
| `https://the-last-battery-original.com/assets/img/last-battery-complete-system.webp` | The Last Battery product image |
| `https://everpitch.vercel.app/assets/img/everpitch-ai-webinar-software-mockup.webp` | EverPitch product image |
| `https://media.flexifunnels.io/sites/7455/1175331/images/box-400.webp` | ProfitMaps AI product image |
| `https://referralnow.co/partners/assets/img/s17/mon-bundle.feb69d8b.png` | Referral Now product image |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/indoor-air-quality-at-home.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `https://lymphtoneic.com/assets/img/lymph-tonic-bottle.webp` | Lymph Tonic product image |
| `https://the-last-battery-original.com/assets/img/last-battery-complete-system.webp` | The Last Battery product image |
| `https://liivarix.vercel.app/assets/img/livarix-bottle.webp` | Livarix product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/mullein-traditional-use-and-research.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `https://lymphtoneic.com/assets/img/lymph-tonic-bottle.webp` | Lymph Tonic product image |
| `https://en-dentabiome.vercel.app/images/dentabiome-bottle.webp` | DentaBiome product image |
| `https://en-gutsave.vercel.app/img/gut-save-bottle.webp` | Gut Save product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/quercetin-and-pine-bark-antioxidants.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-antioxidants-quercetin-pine-bark.webp` | Pulmo Balance bottle with green leaves and capsules on a stone coaster |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `https://liivarix.vercel.app/assets/img/livarix-bottle.webp` | Livarix product image |
| `https://en-colestzen.vercel.app/img/colestzen-bottle.webp` | ColestZen product image |
| `https://okinawantonic.com/assets/img/okinawa-flat-belly-tonic-jar.webp` | Okinawa Flat Belly Tonic product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/seasonal-changes-airway-comfort.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `https://lymphtoneic.com/assets/img/lymph-tonic-bottle.webp` | Lymph Tonic product image |
| `https://en-gutsave.vercel.app/img/gut-save-bottle.webp` | Gut Save product image |
| `https://okinawantonic.com/assets/img/okinawa-flat-belly-tonic-jar.webp` | Okinawa Flat Belly Tonic product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /blog/sleep-and-breathing-habits.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/blog-sleep-and-breathing.webp` | Pulmo Balance bottle in calm green evening light beside a potted plant |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `https://neuralreviven.com/assets/img/neural-revive-tablet-phone.webp` | Neural Revive product image |
| `https://pinealgguardianx.com/img/pineal-guardian-x-bottle.webp` | Pineal Guardian X product image |
| `https://shiftingvibration.org/assets/img/shifting-vibrations-audio-package.webp` | Shifting Vibrations product image |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /disclaimer.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /faq.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /focus-areas/airway-clarity.html

| Image | Final alt text |
|---|---|
| `/assets/img/focus-airway-clarity.webp` | Pulmo Balance bottle photo for the Airway Clarity & Mucus Balance focus area |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /focus-areas/antioxidant-defense.html

| Image | Final alt text |
|---|---|
| `/assets/img/focus-antioxidant-defense.webp` | Pulmo Balance bottle photo for the Antioxidant Defense & Circulation focus area |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /focus-areas/

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle-with-ingredients.webp` | Pulmo Balance bottle on a stone coaster beside a houseplant and capsules |
| `/assets/img/focus-airway-clarity.webp` | Pulmo Balance bottle photo for the Airway Clarity & Mucus Balance focus area |
| `/assets/img/focus-seasonal-comfort.webp` | Pulmo Balance bottle photo for the Seasonal & Nasal Comfort focus area |
| `/assets/img/focus-antioxidant-defense.webp` | Pulmo Balance bottle photo for the Antioxidant Defense & Circulation focus area |
| `/assets/img/focus-respiratory-resilience.webp` | Pulmo Balance bottle photo for the Long-Term Respiratory Resilience focus area |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /focus-areas/respiratory-resilience.html

| Image | Final alt text |
|---|---|
| `/assets/img/focus-respiratory-resilience.webp` | Pulmo Balance bottle photo for the Long-Term Respiratory Resilience focus area |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /focus-areas/seasonal-comfort.html

| Image | Final alt text |
|---|---|
| `/assets/img/focus-seasonal-comfort.webp` | Pulmo Balance bottle photo for the Seasonal & Nasal Comfort focus area |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /how-it-works.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle-green-wellness-scene.webp` | Pulmo Balance bottle on a stone coaster beside green leaves and two capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-studio-bottle.webp` | Close-up of a Pulmo Balance bottle with leaves and capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack covered by the 90-day money-back guarantee |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules dietary supplement |
| `/assets/img/pulmo-balance-bottle-with-ingredients.webp` | Pulmo Balance bottle on a stone coaster with green leaves, a houseplant and two capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/focus-airway-clarity.webp` | Pulmo Balance bottle photo for the Airway Clarity & Mucus Balance focus area |
| `/assets/img/focus-seasonal-comfort.webp` | Pulmo Balance bottle photo for the Seasonal & Nasal Comfort focus area |
| `/assets/img/focus-antioxidant-defense.webp` | Pulmo Balance bottle photo for the Antioxidant Defense & Circulation focus area |
| `/assets/img/focus-respiratory-resilience.webp` | Pulmo Balance bottle photo for the Long-Term Respiratory Resilience focus area |
| `/assets/img/pulmo-balance-bottle-green-wellness-scene.webp` | Pulmo Balance bottle on a stone coaster with green leaves and white capsules |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | Pulmo Balance 2-bottle pack |
| `/assets/img/pulmo-balance-studio-bottle.webp` | Close-up of the Pulmo Balance Daily Lung Support bottle on a stone coaster |
| `/assets/img/pulmo-balance-buyer-checklist.webp` | Two Pulmo Balance bottles with Daily Lung Support highlights and 60-capsule badge |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack covered by the 90-day money-back guarantee |
| `/assets/img/blog-mullein-traditional-use.webp` | Pulmo Balance bottle on a stone coaster beside green leaves, for the mullein article |
| `/assets/img/blog-breathing-exercises.webp` | Two Pulmo Balance Daily Lung Support bottles on a podium with green leaves |
| `/assets/img/blog-indoor-air-quality.webp` | Pulmo Balance bottle in a bright room with houseplants and fresh light |
| `/assets/img/blog-seasonal-airway-comfort.webp` | Pulmo Balance bottle on a marble counter in soft seasonal daylight |
| `/assets/img/blog-antioxidants-quercetin-pine-bark.webp` | Pulmo Balance bottle with green leaves and capsules on a stone coaster |
| `/assets/img/blog-sleep-and-breathing.webp` | Pulmo Balance bottle in calm green evening light beside a potted plant |
| `/assets/img/pulmo-balance-3-bottles.webp` | Three Pulmo Balance bottles, the 90-day supply |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `https://lymphtoneic.com/assets/img/lymph-tonic-bottle.webp` | Lymph Tonic product image |
| `https://liivarix.vercel.app/assets/img/livarix-bottle.webp` | Livarix product image |
| `https://en-gutsave.vercel.app/img/gut-save-bottle.webp` | Gut Save product image |
| `https://en-dentabiome.vercel.app/images/dentabiome-bottle.webp` | DentaBiome product image |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /order.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |

## /price.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack covered by the 90-day money-back guarantee |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /privacy-policy.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /product-overview.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle-with-ingredients.webp` | Pulmo Balance bottle on a stone coaster in a green wellness setting |
| `/assets/img/pulmo-balance-two-bottles-lung-support-banner.webp` | Two Pulmo Balance bottles with Daily Lung Support label and key formula highlights |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Pulmo Balance 3-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle pack with bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /product-review.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-studio-bottle.webp` | Pulmo Balance bottle on a stone coaster with green leaves and capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /pros-and-cons.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /reviews.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-buyer-checklist.webp` | Two Pulmo Balance bottles with label highlights, 60 capsules, dietary supplement |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-3-bottles.webp` | Three Pulmo Balance bottles, the 90-day supply |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance bottle with Daily Lung Support label |
| `/assets/img/pulmo-balance-2-bottles.webp` | Two Pulmo Balance bottles, the 60-day supply |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /terms.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle, 60 capsules |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |

## /where-to-buy.html

| Image | Final alt text |
|---|---|
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | Three bottles of Pulmo Balance with two digital bonus guides |
| `/assets/img/pulmo-balance-bottle.webp` | Pulmo Balance Daily Lung Support bottle |
| `/assets/img/pulmo-balance-2-bottles-pack.webp` | 2 bottles of Pulmo Balance Daily Lung Support |
| `/assets/img/pulmo-balance-3-bottles-pack.webp` | 3 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | 6 bottles of Pulmo Balance Daily Lung Support with the two digital bonus guides |
| `/assets/img/pulmo-balance-6-bottles.webp` | Six-bottle Pulmo Balance package, a 180-day supply |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Six bottles of Pulmo Balance with The 7-Day Lung Reset Protocol and breathing blueprint bonus guides |
| `/assets/img/pulmo-balance-6-bottles-pack.webp` | Pulmo Balance 6-bottle Best Value package thumbnail |
