const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

// ============================================================================
// Testes adicionados para matar mutantes sobreviventes (Etapa 5)
// Cada bloco indica a linha de src/operacoes.js e o tipo de mutante eliminado.
// ============================================================================
describe('Testes reforçados para eliminar mutantes sobreviventes', () => {

  // --- divisao (L8): StringLiteral na mensagem de erro ---
  test('divisao: lança erro com a mensagem correta quando o divisor é zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
    expect(divisao(-9, 3)).toBe(-3);
  });

  // --- raizQuadrada (L13): ConditionalExpression / EqualityOperator (n < 0 -> n <= 0) ---
  test('raizQuadrada: lança erro com mensagem para negativos e aceita o limite zero', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
    expect(raizQuadrada(0)).toBe(0);
  });

  // --- fatorial (L18-19): erro para negativos, limites 0 e 1 ---
  test('fatorial: lança erro com mensagem para negativos', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('fatorial: casos-limite 0, 1 e 2 e valores maiores', () => {
    expect(fatorial(0)).toBe(1);
    expect(fatorial(1)).toBe(1);
    expect(fatorial(2)).toBe(2);
    expect(fatorial(5)).toBe(120);
  });

  // --- mediaArray (L25): array vazio retorna 0 (e não NaN) ---
  test('mediaArray: array vazio retorna 0', () => {
    expect(mediaArray([])).toBe(0);
    expect(mediaArray([5])).toBe(5);
  });

  // --- maximoArray / minimoArray (L34, L38): guarda de array vazio ---
  test('maximoArray: lança erro para array vazio', () => {
    expect(() => maximoArray([])).toThrow(/Array vazio/);
    expect(() => maximoArray([])).toThrow(/valor máximo/);
    expect(maximoArray([-3, -1, -7])).toBe(-1);
  });
  test('minimoArray: lança erro para array vazio', () => {
    expect(() => minimoArray([])).toThrow(/Array vazio/);
    expect(() => minimoArray([])).toThrow(/valor mínimo/);
    expect(minimoArray([-3, -1, -7])).toBe(-7);
  });

  // --- isPar / isImpar (L43-44): caso falso para cada função ---
  test('isPar: retorna false para ímpares e true para zero', () => {
    expect(isPar(7)).toBe(false);
    expect(isPar(0)).toBe(true);
    expect(isPar(-4)).toBe(true);
  });
  test('isImpar: retorna false para pares e true para ímpares negativos', () => {
    expect(isImpar(4)).toBe(false);
    expect(isImpar(0)).toBe(false);
    expect(isImpar(-3)).toBe(true);
  });

  // --- isPrimo (L73-75): limites, compostos, loop e operador ---
  test('isPrimo: números menores ou iguais a 1 não são primos', () => {
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(-7)).toBe(false);
  });
  test('isPrimo: compostos retornam false e primos pequenos retornam true', () => {
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(3)).toBe(true);
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(15)).toBe(false);
    expect(isPrimo(13)).toBe(true);
  });

  // --- produtoArray (L84): array vazio retorna o elemento neutro 1 ---
  test('produtoArray: array vazio retorna 1 (elemento neutro)', () => {
    expect(produtoArray([])).toBe(1);
    expect(produtoArray([5])).toBe(5);
    expect(produtoArray([2, 0, 4])).toBe(0);
  });

  // --- clamp (L88-89): valores abaixo do mínimo e acima do máximo ---
  test('clamp: limita pelos extremos do intervalo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });

  // --- isDivisivel (L92): caso falso ---
  test('isDivisivel: retorna false quando não é divisível', () => {
    expect(isDivisivel(10, 3)).toBe(false);
    expect(isDivisivel(0, 5)).toBe(true);
  });

  // --- conversões de temperatura (L93-94): ArithmeticOperator em 9/5 e 5/9 ---
  test('celsiusParaFahrenheit: usa o fator 9/5 corretamente', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
    expect(celsiusParaFahrenheit(-40)).toBeCloseTo(-40);
    expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6);
  });
  test('fahrenheitParaCelsius: usa o fator 5/9 corretamente', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
    expect(fahrenheitParaCelsius(-40)).toBeCloseTo(-40);
    expect(fahrenheitParaCelsius(98.6)).toBeCloseTo(37);
  });

  // --- inverso (L96): guarda de zero ---
  test('inverso: lança erro com mensagem para zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
    expect(inverso(-2)).toBe(-0.5);
  });

  // --- comparações (L104-106): resultados falsos e igualdade na fronteira ---
  test('isMaiorQue: false para menor e para igual', () => {
    expect(isMaiorQue(5, 10)).toBe(false);
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  test('isMenorQue: false para maior e para igual', () => {
    expect(isMenorQue(10, 5)).toBe(false);
    expect(isMenorQue(5, 5)).toBe(false);
  });
  test('isEqual: false para valores diferentes', () => {
    expect(isEqual(7, 8)).toBe(false);
    expect(isEqual(7, '7')).toBe(false);
  });

  // --- medianaArray (L108-112): guarda, ordenação numérica, par/ímpar ---
  test('medianaArray: lança erro para array vazio', () => {
    expect(() => medianaArray([])).toThrow(/Array vazio/);
    expect(() => medianaArray([])).toThrow(/mediana/);
  });
  test('medianaArray: ordena numericamente arrays desordenados de tamanho ímpar', () => {
    expect(medianaArray([10, 9, 1, 100, 5])).toBe(9);
    expect(medianaArray([5])).toBe(5);
  });
  test('medianaArray: média dos dois valores centrais em arrays de tamanho par', () => {
    expect(medianaArray([4, 1, 3, 2])).toBe(2.5);
    expect(medianaArray([10, 2, 8, 4])).toBe(6);
    expect(medianaArray([1, 3])).toBe(2);
  });

  // --- Garantia de que a mediana não altera o array original (spread [...numeros]) ---
  test('medianaArray: não modifica o array de entrada', () => {
    const entrada = [3, 1, 2];
    medianaArray(entrada);
    expect(entrada).toEqual([3, 1, 2]);
  });
});
