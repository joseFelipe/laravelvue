<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Usuários</h3>

                        <div class="card-tools">
                            <button
                                type="button"
                                class="btn btn-block btn-primary btn-sm"
                                data-toggle="modal"
                                data-target="#newUserModal"
                            >
                                Adicionar usuário
                                <i class="fa fa-user-plus"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Tipo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>183</td>
                                    <td>John Doe</td>
                                    <td>11-7-2014</td>
                                    <td>
                                        <span class="tag tag-success"
                                            >Approved</span
                                        >
                                    </td>
                                    <td>
                                        <a
                                            href="#"
                                            class="btn btn-outline-primary btn-sm"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <a
                                            href="#"
                                            class="btn btn-outline-danger btn-sm"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="newUserModal" tabindex="-1" role="dialog">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Adicionar novo usuário</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <input
                                v-model="form.name"
                                type="text"
                                name="name"
                                placeholder="Nome"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('name')
                                }"
                            />
                            <has-error :form="form" field="name"></has-error>
                        </div>
                        <div class="form-group">
                            <input
                                v-model="form.email"
                                type="text"
                                name="email"
                                placeholder="Email"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('email')
                                }"
                            />
                            <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="form-group">
                            <textarea
                                v-model="form.bio"
                                name="bio"
                                placeholder="Texto simples sobre o usuário..."
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('bio')
                                }"
                            />
                            <has-error :form="form" field="bio"></has-error>
                        </div>
                        <div class="form-group">
                            <select
                                v-model="form.type"
                                name="type"
                                placeholder="type"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('type')
                                }"
                            >
                                <option value=""
                                    >Selecione um perfil de usuário</option
                                >
                                <option value="admin">Administrador</option>
                                <option value="user">Usuário Padrão</option>
                                <option value="author">Autor</option>
                            </select>
                            <has-error :form="form" field="type"></has-error>
                        </div>
                        <div class="form-group">
                            <input
                                v-model="form.password"
                                type="password"
                                name="password"
                                placeholder="Senha"
                                class="form-control"
                                :class="{
                                    'is-invalid': form.errors.has('password')
                                }"
                            />
                            <has-error
                                :form="form"
                                field="password"
                            ></has-error>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-danger"
                            data-dismiss="modal"
                        >
                            Fechar
                        </button>
                        <button type="button" class="btn btn-success">
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                name: "",
                email: "",
                password: "",
                type: "",
                bio: "",
                photo: ""
            })
        };
    },

    mounted() {
        console.log("Component mounted.");
    }
};
</script>
