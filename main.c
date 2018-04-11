#include <stdio.h>
#include <stdlib.h>

int GetIntEntreMinMax(char mensaje[], int maximo, int minimo, int *respuesta);
int getInt(char mensaje[], char mensajeError[], int intentos, int maximo, int minimo);
void saludar (void);
int cambiar(int *dato); /*punto h defino con * paso con &*/
int main()
{
    /*int numero=3;
    cambiar(&numero); /*cuando se pasa solamente la funcion solo aca es que se usa el &*/
    //printf("numero: %d", numero);
    //saludar();
    int respuesta;
    int sueldo;
    respuesta = GetIntEntreMinMax("Ingrese sueldo", 9000,3000,&sueldo);
    if(respuesta == 0)
    {
        printf("sueldo correcto :  %d", sueldo);
    }else{
        if(respuesta<0)
        {
            printf("te falto");
        }else
        {
            printf("te pasaste");
        }
    }
    return 0;
}
int GetIntEntreMinMax(char mensaje[], int maximo, int minimo, int *respuesta)
{
    int retorno=0;
    int ingresoAux;
    printf("%s", mensaje);
    scanf("%d",&ingresoAux);
    if(ingresoAux<minimo)
    {
        retorno = -1;
    }else {
        if(ingresoAux>maximo)
        {
            retorno = 1;
        }else
        {
            *respuesta = ingresoAux;
            retorno= 0;
        }
    }

    return retorno;
}
int cambiar(int *dato) /*punto c */
{
    *dato = 666;
    return 0;
}
void saludar(void)
{
    printf("Hola UTNFRA! \n");
}

/** \brief
 *  getint()
 * \param mensaje[] char mensaje de pedido de datos
 * \param mensajeError[] char mensaje de error
 * \param mensaje[] char mensaje de pedido de datos
 * \param mensajeError[] char mensaje de error
 * \param intentos int cantidad de posibilidades
 * \param maximo int el maximo numerico posible
 * \param minimo int el minimo numerico posible
 * \return int numero entero
 *
 */


int getInt(char mensaje[], char mensajeError[], int intentos, int maximo, int minimo)
{ /*
int retorno = 0;
    do{
               int num;
                printf("%s", mensaje);
                setbuf(stdfin,NULL);
                scanf("%s", &num);

                if(num < minimo || num > maximo)
                {
                    printf("%s", mensajeError);
                    intentos = intentos - 1;
                }*/
    int retorno = 0;
        do{
        printf("%s", mensaje);
        scanf("%d", &retorno);
         if(retorno<=maximo && retorno>=minimo)
         {
             break;
         }
         printf("%s", mensajeError);
        intentos--;
    }while(intentos > 0);
    return retorno;
}
