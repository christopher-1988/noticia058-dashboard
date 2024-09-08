import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form, Offcanvas, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
//Model
import { UserDataRow, ResponseNotificacion } from "@src/models";
//Service
import { postUsuario } from "@services/usuario.service";
interface FormValues extends UserDataRow {
  password?: string;
  level?: string | number;
}

interface Props {
  state: boolean;
  handleToggle: (params: boolean) => void;
}

const FormNotificacion: React.FC<Props> = ({ state, handleToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const handleCloseAndReset = () => {
    handleToggle(false);
    reset();
  };
  //Solicitud
  const usuarioMutation = useMutation({
    mutationFn: postUsuario,
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (value: FormValues) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form: any = new FormData();
    form.append("op", "usuario");
    form.append("email", value.email);
    usuarioMutation.mutate(form, {
      onSuccess: (rsp) => {
        const { data, status } = rsp;
        if (status >= 200 && status < 300) {
          const { responseCode, message }: ResponseNotificacion = data;
          if (responseCode === 1) {
            toast.success(message);
          } else if (responseCode === 2) {
            toast.error(message);
          }
        }
      },
      onError: () => {
        toast.error("Error en el servidor.");
      },
    });
  };

  return (
    <>
      <Offcanvas show={state} onHide={handleCloseAndReset} placement="end">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <h2>Enviar notificación</h2>{" "}
          </Offcanvas.Title>
          <div className="btn-close" onClick={handleCloseAndReset}>
            <FontAwesomeIcon icon={faClose} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="position-relative h-100"
          >
            <Form.Group className="mb-1" controlId="name">
              <Form.Label>Titutlo</Form.Label>
              <Form.Control
                isInvalid={errors.name ? true : false}
                type="text"
                placeholder="Agregue titulo..."
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <Form.Text className="text-danger">
                  Este campo es requerido
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-1" controlId="name">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                isInvalid={errors.lastName ? true : false}
                type="text"
                placeholder="Agregue descripción..."
                {...register("lastName", { required: true, maxLength: 100 })}
              />
              {errors.lastName && (
                <Form.Text className="text-danger">
                  Este campo es requerido
                </Form.Text>
              )}
            </Form.Group>

            {/* cancelar y agregar buttons  row */}
            <div
              className="d-flex justify-content-end gap-10"
              style={{ position: "absolute", bottom: "30px", width: "100%" }}
            >
              <Button
                variant="secondary"
                className="border-0 me-1"
                onClick={handleCloseAndReset}
              >
                <span className="text-dark">Cancelar</span>
              </Button>
              <Button variant="primary" type="submit">
                {usuarioMutation.isPending && (
                  <Spinner color="light" size="sm"></Spinner>
                )}
                <span className="align-middle ms-25">Enviar</span>
              </Button>
            </div>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default FormNotificacion;
