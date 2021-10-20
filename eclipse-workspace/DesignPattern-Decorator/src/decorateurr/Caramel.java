package decorateurr;

import boisson.Boisson;

public class Caramel extends DecoratorAbstr {

	public Caramel(Boisson boisson) {
		super(boisson);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String getDescription() {
		return boisson.getDescription()+" Avec Caramel";
	}

	@Override
	public double cout() {
		return 0.5+boisson.cout();
	}

}