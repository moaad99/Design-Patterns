package decorateurr;

import boisson.Boisson;

public abstract class DecoratorAbstr extends Boisson {
	
	protected Boisson boisson;

	public DecoratorAbstr(Boisson boisson) {
		this.boisson = boisson;
	}
	
	
	
	public abstract String getDescription();

}
