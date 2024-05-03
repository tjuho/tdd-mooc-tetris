export class Score {
  level;
  score;
  
  constructor() {
    this.level = 0;
    this.score = 0;
  }
  
  calculateScore(rows){
    switch(rows){
      case 1: return 40 * (this.level + 1);
      case 2: return 100 * (this.level + 1);
      case 3: return 300 * (this.level + 1); 	
      case 4: return 1200 * (this.level + 1);
      default: return 0;
    }
  }
    
  update(rows){
    this.score += this.calculateScore(rows);
    this.level = (this.score / 2000) | 0; // float to int trick
  }
}
