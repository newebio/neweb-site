# Styles

В настоящее время Neweb предлагает 3 способа задания стилей:

1. React inline-стили.
2. Замена стандартного html-шаблона (app/template.html) и размещение стилей там.
3. Styled - react-компонент для задания стилей дочерним элементам с помощью css-селекторов

## Styled

Styled принимает в props параметр styles, которые описывается списком селекторов и стилей, поддерживаемых jss (https://github.com/cssinjs/jss)

```typescript
<Styled styles={{ "ul>li>a": { color: "red" } }}>
<div>
  <ul>
    <li>
      <a></a>
    </li>
  </ul>
</div>
</Styled>
```

В данном примере Styled создаст родительский элемент noindex с уникальным именем класса (пример, s__s1), а также создаст таблицу стилей вида `.s__s1 ul>li>a { color: red; }`.