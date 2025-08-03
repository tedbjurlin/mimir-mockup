import "./TabContainer.scss";

const TabContainer: React.FC = () => {
  return (
    <div className="tab-container">
      <h1 className="markdown-h1">Ontologies of Archeology</h1>
      <p className="markdown-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique
        lectus in libero rutrum sollicitudin. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Praesent non
        dui odio. Pellentesque quis dictum leo. Sed tempus nibh quis dapibus
        posuere. Etiam id dui tortor. Sed ultrices tortor in odio suscipit
        consequat. Etiam risus neque, porttitor ut sem eu, commodo facilisis
        felis. Proin consectetur arcu in orci ornare ultricies. Phasellus eu
        malesuada elit, vitae lacinia purus. Cras facilisis diam quis tempor
        egestas. Sed quis semper tortor, vitae imperdiet velit.
      </p>
      <h2 className="markdown-h1">Aenean lacinia consectetur velit.</h2>
      <p className="markdown-body">
        Ut vitae elit sem. Vestibulum ut justo commodo dolor pellentesque
        ornare. Proin vulputate est diam, lacinia imperdiet ex venenatis quis.
        Mauris id eros eleifend, porta est id, dictum turpis. Pellentesque
        congue nisi diam, at facilisis massa iaculis efficitur. Donec hendrerit
        commodo metus, ac ullamcorper velit elementum sit amet. Duis interdum
        vitae nisl eu auctor. Maecenas scelerisque non arcu nec pharetra.
        Suspendisse feugiat ut ex eu euismod. Integer vitae nisl in nisi rhoncus
        convallis. Maecenas odio magna, imperdiet sit amet laoreet vel, varius
        mollis erat. Nulla facilisi. Nam quis ultricies nulla. Pellentesque
        posuere at mauris sit amet tincidunt. Cras molestie leo sed pellentesque
        consequat. Fusce porttitor, erat vestibulum tempus dictum, ipsum purus
        pulvinar mauris, eu sagittis purus enim et metus. Vestibulum non nunc
        dictum, ornare libero et, eleifend metus. Integer ut erat convallis,
        iaculis velit id, consequat ligula.
      </p>

      <pre>
        <code className="markdown-code">
          {`struct {
  bool success;
  int rounded;
  double precise;
} fetchNumber() {
  return { true, 42, 42.0 };
}

int main(char** argv, int argc) {
  auto result = fetchNumber();
  if(result.success) {
    if(result.rounded > 40) {
      std::cout << result.precise << std::endl;
    }
  }
  return 0;
}`}
        </code>
      </pre>

      <p className="markdown-body">
        Suspendisse et malesuada diam. Morbi imperdiet ac metus et rhoncus.
        Vivamus volutpat laoreet dolor, ut molestie sapien mattis et. Etiam non
        nulla sit amet felis eleifend tempor. Cras ut hendrerit purus. Cras id
        quam facilisis, posuere orci molestie, commodo ex. Nullam id gravida
        leo. Morbi a risus nec ex interdum malesuada rhoncus quis tellus.
        Praesent tincidunt non tellus vel gravida. Curabitur ac tincidunt orci.
        Nulla posuere ac mauris efficitur tempus. Proin viverra pellentesque
        eros ac porttitor. In non velit sed libero rutrum tempus. Sed et lacinia
        urna, sit amet scelerisque nulla.
      </p>
    </div>
  );
};

export default TabContainer;
