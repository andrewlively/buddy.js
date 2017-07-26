const Detector = require(`./lib/detector`);
const Reporter = require(`./lib/reporters`).json;

module.exports = class Buddy {
  constructor(paths, config) {
    this.paths = paths;
    this.config = config;
  }

  run() {
    const detector = new Detector(this.paths, this.config);

    const magicNumbers = [];

    detector.on(`found`, function(found) {
      magicNumbers.push(found);
    });

    return detector.run().then(() => magicNumbers);
  }
}