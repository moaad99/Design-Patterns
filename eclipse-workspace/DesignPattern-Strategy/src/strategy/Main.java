package strategy;

public class Main {

	public static void main(String[] args) {
		Context context = new Context();

	    context.setStrategy(new StrategyImpl1());
	    context.appliquerStrategy();
	    context.setStrategy(new StrategyImpl2());
	    context.appliquerStrategy();
	   
	    context.setStrategy(new StrategyImpl3());
	    context.appliquerStrategy();
	    
	    
	



	}

}
