import React from 'react'
import logo from '../assets/images/logo.png'
import {MdPassword, MdPerson} from 'react-icons/md'
import Footer from '../components/footer'


function Login() {
    return (
        <div>
            <section class="hero is-dark is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div className='is-flex is-justify-content-center py-4'>
                            <img src={logo} width={130} />
                        </div>
                        <div class="columns is-centered">
                            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                                <form action="javascript:void(0)" class="box" >
                                    <div class="field">
                                        <label for="" class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required />
                                            <span class="icon is-small is-left">
                                               <MdPerson/>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <label for="" class="label">Password</label>
                                        <div class="control has-icons-left">
                                            <input type="password" placeholder="*******" class="input" required />
                                            <span class="icon is-small is-left">
                                               <MdPassword/>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <button class="button is-primary">
                                            Connexion
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-4'>
                <Footer/>
            </div>
        </div>
    )
}

export default Login