package strategy;

public class Context {
	
	private Istrategy strategy;
	
	public void appliquerStrategy() {
		
		strategy.appliquer();
	}


	public void setStrategy(Istrategy strategy) {
		this.strategy = strategy;
	}
	
	
	

}
