package decorateurr;

import boisson.Boisson;

public class Chocolat extends DecoratorAbstr {

	public Chocolat(Boisson boisson) {
		super(boisson);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String getDescription() {
		return boisson.getDescription()+" Au chocolat";
	}

	@Override
	public double cout() {
		return 1.5+boisson.cout();
	}

}
