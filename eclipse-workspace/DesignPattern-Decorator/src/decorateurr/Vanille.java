package decorateurr;

import boisson.Boisson;

public class Vanille extends DecoratorAbstr {

	public Vanille(Boisson boisson) {
		super(boisson);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String getDescription() {
		return boisson.getDescription()+" Avec Vanille";
	}

	@Override
	public double cout() {
		return 2+boisson.cout();
	}

}
