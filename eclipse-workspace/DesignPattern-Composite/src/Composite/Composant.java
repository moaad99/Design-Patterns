package Composite;


public abstract class Composant {
	
   public Composant(String name) {
		this.name = name;
	}
protected String name;
   protected int level;
   public abstract void show();
   public String tab() {
	   String tab="";
	   for(int i=0;i<level;i++) {
		   tab=tab+"\t";
	   }
	   return tab;
   }
}
