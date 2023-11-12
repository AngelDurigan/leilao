package vendedor;

import java.util.Scanner;

import vendedor.api.ClienteApi;
import vendedor.api.models.ResponseInfo;
import vendedor.api.models.ResponseToken;

public class Cliente {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ResponseToken token = null;
        ResponseInfo info = null;
        while(true) {
            try {
            System.out.print("Digite seu email: ");
            String email = scanner.nextLine();
            System.out.print("Digite sua senha: ");
            String senha = scanner.nextLine();
                token = ClienteApi.login(email, senha);
                info = ClienteApi.info(token);
                if(info.getCargo() != "vendedor")
                    throw new Exception("Você não é um vendedor");
                break;
            } catch (Exception e) {
                limparConsole();
                System.out.println("Erro: email ou senha incorretos, ou você não é um vendedor(a)");
            }
        }
        limparConsole();
        System.out.println("Bem vindo "+info.getNome());
        System.out.println("Seu cargo é "+info.getCargo());
    }

    public static void limparConsole() {
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }
}