module.exports = class DnaTranscriber {
  constructor() {
    this.nucleotides = ['G', 'C', 'T', 'A']
  }

  toRna(dna) {
    let output = []
    for (let nucleotide in dna) {
      if (!this.nucleotides.includes(dna[nucleotide])) {
        throw new Error('Invalid input')
      }
      switch (dna[nucleotide]) {
        case 'G':
          output.push('C')
          break
        case 'C':
          output.push('G')
          break
        case 'T':
          output.push('A')
          break
        case 'A':
          output.push('U')
          break
      }
    }

    return output.join('')
  }
}