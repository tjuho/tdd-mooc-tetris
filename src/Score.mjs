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
      default: return 1200 * (this.level + 1);
    }
    
  update(rows){
    this.score += calculateScore(rows);
  }

}
