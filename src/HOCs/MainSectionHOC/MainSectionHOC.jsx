export const MainSectionHOC = (WrappedComponent, styles = '') => {

    return function Component(props){
        return (
            <section className={'pt-12 pb-14 bg-black flex-wrap ' + styles}>
                <WrappedComponent {...props}/>
            </section>
        );
    }

}
