import './App.css';

function App() {
        return (
                <div className="App">
                        <div className='flex h-[100vh]'>
                                <div className="pointer-events-none relative z-20 m-auto flex w-full max-w-[520px] flex-col">
                                        <div className="flex w-full flex-col p-12">
                                                <div className="mb-5 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="80" viewBox="0 0 62 20">
                                                                <path fill="#fff" d="M33.421 7.828c1.519 0 2.322 1.025 2.322 2.966v7.575c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468V9.881c0-1.434-.428-2.656-1.24-3.528-.816-.878-1.959-1.341-3.308-1.341-1.624 0-2.988.616-4.173 1.885l-.043.047-.034-.053c-.784-1.228-2.012-1.879-3.546-1.879-1.516 0-2.753.572-3.68 1.7l-.087.107V5.741a.466.466 0 00-.465-.469h-2.068a.466.466 0 00-.465.469v12.625c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468v-7.497c0-1.163.471-1.872.865-2.266a2.682 2.682 0 011.872-.778c1.519 0 2.322 1.025 2.322 2.966v7.575c0 .259.208.468.465.468h2.068a.466.466 0 00.465-.468v-7.497c0-1.163.471-1.872.865-2.266a2.682 2.682 0 011.869-.775zm28.533 3.875c0-1.878-.543-3.562-1.526-4.744-1.06-1.275-2.597-1.947-4.442-1.947-1.795 0-3.429.722-4.603 2.035-1.163 1.297-1.802 3.081-1.802 5.022 0 4.153 2.688 7.056 6.535 7.056 2.459 0 4.486-1.213 5.528-3.269a.464.464 0 00-.252-.656l-1.664-.634a.462.462 0 00-.586.246c-.518 1.113-1.615 1.76-3.023 1.76-2.027 0-3.431-1.463-3.664-3.819l-.006-.056h9.043c.257 0 .465-.21.465-.469v-.525zm-9.362-1.25l.015-.062c.456-1.81 1.677-2.85 3.354-2.85 1.773 0 2.939 1.122 2.967 2.859v.05h-6.336zm-35.347 7.75L10.611.553a.466.466 0 00-.434-.303H7.146a.466.466 0 00-.434.303L.078 18.203a.467.467 0 00.434.634h2.176a.465.465 0 00.437-.306l1.187-3.209h8.627l1.206 3.212a.466.466 0 00.434.303h2.229a.47.47 0 00.437-.634zM5.354 12.509l3.242-8.756 3.289 8.756zm35.473-6.765v1.868c0 .26.208.469.465.469h2.294v10.288c0 .259.208.469.465.469h2.068c.257 0 .465-.21.465-.469V5.744a.466.466 0 00-.465-.469h-4.83a.466.466 0 00-.462.469zM43.536.719v2.162c0 .26.208.469.465.469h2.174a.466.466 0 00.465-.469V.719a.466.466 0 00-.465-.469h-2.174a.468.468 0 00-.465.469z"></path>
                                                        </svg>
                                                </div>

                                                <div className="flex">
                                                        <p className="text-secondary pointer-events-auto text-4xl font-semibold leading-tight">Joyful and productive collaboration.&nbsp;
                                                                <span className="text-primary text-white">All in one<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noopener noreferrer" target="_blank">.</a></span>
                                                        </p>
                                                </div>
                                                
                                                <div className="pointer-events-auto mt-6 flex flex-col">
                                                        <button type="button" className="appearance-none scale-100 transition-transform active:scale-[0.98] flex w-full items-center justify-center rounded-xl bg-gray-800 px-10 py-4 text-gray-100 transition-colors duration-150 hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-200" data-testid="login">
                                                                <img className="inline w-4 opacity-80" src="/google-icon-light.svg" alt="google icon" />
                                                                <span className="ml-2.5 text-base font-semibold" style={{lineBreak: 'anywhere'}}>Continue with Google</span>
                                                        </button>
                                                        <small className="text-secondary mt-3 w-full text-[11px]">By clicking “Continue with Google”, you acknowledge that you have read and understood, and agree to Amie's 
                                                                <a className="hover:text-primary transition-colors" href="https://amie.so/terms" rel="noopener noreferrer" target="_blank">Terms &amp; Conditions</a> 
                                                                <a className="hover:text-primary transition-colors" href="https://amie.so/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a>.
                                                        </small>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}

export default App;
