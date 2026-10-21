# Virtual Vernier Caliper Simulator

An open-source browser-based simulator to introduce precision measurement to engineering students.

## Features
- Slider-controlled jaw-opening model (0–100 mm)
- Illustrative metric main scale and vernier scale
- Calculated reading at 0.02 mm resolution
- Practice mode with answer hiding, random questions, and score
- Responsive single-page interface

> **Educational limitation:** Scale graphics are illustrative, not a mechanically calibrated 50-division vernier. Readings are calculated from the slider. Do not use for real measurements or calibration.

## Run locally
Download the repository and open `index.html` in a modern web browser. No installation required.

## GitHub Pages
In repository **Settings → Pages**, under **Build and deployment**, select **Deploy from a branch**; select `main`, folder `/ (root)`, then save. GitHub will display a website URL when deployed.

## Contributing
Issues, bug reports, accessibility improvements, educational ideas and pull requests are welcome. Please describe the problem and steps to reproduce it.

## Roadmap
- [ ] Calibrated SVG main/vernier geometry
- [ ] Realistic inner/outer jaws and depth rod
- [ ] Zero-error exercises
- [ ] Accessible keyboard controls and guided lessons
- [ ] Automatic unit tests

## License
MIT. See `LICENSE`.
