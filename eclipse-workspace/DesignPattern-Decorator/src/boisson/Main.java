package boisson;

import decorateurr.Chocolat;
import decorateurr.Vanille;

public class Main {

	public static void main(String[] args) {
		
		Boisson boisson= new Expresso();
		System.out.println(boisson.getDescription());

		System.out.println("prix : "+boisson.cout());
		
		System.out.println("----------------------");
		
		boisson= new Chocolat( new Vanille(boisson));
		
		System.out.println(boisson.getDescription());
		System.out.println("prix : "+boisson.cout());
		

	}

}
